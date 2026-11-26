-- WorkNest AI Database Schema
-- Run this in your Supabase SQL Editor

-- ─────────────────────────────────────────
-- PROFILES
-- ─────────────────────────────────────────
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────
-- WORKSPACES
-- ─────────────────────────────────────────
create table if not exists public.workspaces (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique,
  owner_id uuid references auth.users on delete cascade not null,
  created_at timestamptz default now()
);

alter table public.workspaces enable row level security;

create policy "Workspace owner can update workspace"
  on public.workspaces for update
  using (owner_id = auth.uid());

create policy "Authenticated users can create workspaces"
  on public.workspaces for insert
  with check (auth.uid() = owner_id);

-- ─────────────────────────────────────────
-- WORKSPACE MEMBERS
-- ─────────────────────────────────────────
create table if not exists public.workspace_members (
  id uuid default gen_random_uuid() primary key,
  workspace_id uuid references public.workspaces on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  role text not null default 'member' check (role in ('admin', 'member', 'viewer')),
  joined_at timestamptz default now(),
  unique (workspace_id, user_id)
);

alter table public.workspace_members enable row level security;

create policy "Members can view workspace members"
  on public.workspace_members for select
  using (
    user_id = auth.uid() or
    exists (
      select 1 from public.workspaces
      where id = workspace_members.workspace_id and owner_id = auth.uid()
    )
  );

create policy "Admins can manage workspace members"
  on public.workspace_members for all
  using (
    exists (
      select 1 from public.workspaces
      where id = workspace_members.workspace_id and owner_id = auth.uid()
    )
  );

-- Add workspace SELECT policy here (after workspace_members exists)
create policy "Workspace members can view workspace"
  on public.workspaces for select
  using (
    owner_id = auth.uid() or
    exists (
      select 1 from public.workspace_members
      where workspace_id = workspaces.id and user_id = auth.uid()
    )
  );

-- ─────────────────────────────────────────
-- PROJECTS
-- ─────────────────────────────────────────
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  workspace_id uuid references public.workspaces on delete cascade not null,
  name text not null,
  description text,
  status text not null default 'active' check (status in ('active', 'completed', 'archived')),
  due_date date,
  color text default '#1677E8',
  created_by uuid references auth.users on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.projects enable row level security;

create policy "Workspace members can view projects"
  on public.projects for select
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = projects.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can create projects"
  on public.projects for insert
  with check (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can update projects"
  on public.projects for update
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = projects.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Project creator or workspace admin can delete"
  on public.projects for delete
  using (created_by = auth.uid());

-- ─────────────────────────────────────────
-- TASKS
-- ─────────────────────────────────────────
create table if not exists public.tasks (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete cascade not null,
  workspace_id uuid references public.workspaces on delete cascade not null,
  title text not null,
  description text,
  status text not null default 'todo' check (status in ('todo', 'in-progress', 'in-review', 'completed')),
  priority text not null default 'medium' check (priority in ('urgent', 'high', 'medium', 'low')),
  assignee_id uuid references auth.users on delete set null,
  due_date date,
  created_by uuid references auth.users on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.tasks enable row level security;

create policy "Workspace members can view tasks"
  on public.tasks for select
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = tasks.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can create tasks"
  on public.tasks for insert
  with check (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can update tasks"
  on public.tasks for update
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = tasks.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Task creator can delete task"
  on public.tasks for delete
  using (created_by = auth.uid());

-- ─────────────────────────────────────────
-- TASK COMMENTS
-- ─────────────────────────────────────────
create table if not exists public.task_comments (
  id uuid default gen_random_uuid() primary key,
  task_id uuid references public.tasks on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  content text not null,
  created_at timestamptz default now()
);

alter table public.task_comments enable row level security;

create policy "Task comment visibility follows task access"
  on public.task_comments for select
  using (
    exists (
      select 1 from public.tasks t
      join public.workspaces w on w.id = t.workspace_id
      left join public.workspace_members wm on wm.workspace_id = w.id
      where t.id = task_comments.task_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can add comments"
  on public.task_comments for insert
  with check (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- DOCUMENTS
-- ─────────────────────────────────────────
create table if not exists public.documents (
  id uuid default gen_random_uuid() primary key,
  workspace_id uuid references public.workspaces on delete cascade not null,
  title text not null,
  content text,
  folder text default 'General',
  is_knowledge_base boolean default false,
  created_by uuid references auth.users on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.documents enable row level security;

create policy "Workspace members can view documents"
  on public.documents for select
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = documents.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can create documents"
  on public.documents for insert
  with check (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can update documents"
  on public.documents for update
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = documents.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Document creator can delete"
  on public.documents for delete
  using (created_by = auth.uid());

-- ─────────────────────────────────────────
-- AUTOMATION WORKFLOWS
-- ─────────────────────────────────────────
create table if not exists public.automation_workflows (
  id uuid default gen_random_uuid() primary key,
  workspace_id uuid references public.workspaces on delete cascade not null,
  name text not null,
  trigger_description text not null,
  action_description text not null,
  is_active boolean default true,
  run_count integer default 0,
  last_run_at timestamptz,
  created_by uuid references auth.users on delete set null,
  created_at timestamptz default now()
);

alter table public.automation_workflows enable row level security;

create policy "Workspace members can view workflows"
  on public.automation_workflows for select
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = automation_workflows.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "Workspace members can manage workflows"
  on public.automation_workflows for all
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = automation_workflows.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

-- ─────────────────────────────────────────
-- ACTIVITY LOG
-- ─────────────────────────────────────────
create table if not exists public.activity_log (
  id uuid default gen_random_uuid() primary key,
  workspace_id uuid references public.workspaces on delete cascade not null,
  user_id uuid references auth.users on delete set null,
  action text not null,
  resource_type text,
  resource_id uuid,
  meta jsonb,
  created_at timestamptz default now()
);

alter table public.activity_log enable row level security;

create policy "Workspace members can view activity"
  on public.activity_log for select
  using (
    exists (
      select 1 from public.workspaces w
      left join public.workspace_members wm on wm.workspace_id = w.id
      where w.id = activity_log.workspace_id
        and (w.owner_id = auth.uid() or wm.user_id = auth.uid())
    )
  );

create policy "System can insert activity"
  on public.activity_log for insert
  with check (true);

-- ─────────────────────────────────────────
-- WORKSPACE SUBSCRIPTIONS
-- ─────────────────────────────────────────
create table if not exists public.workspace_subscriptions (
  id uuid default gen_random_uuid() primary key,
  workspace_id uuid references public.workspaces on delete cascade not null unique,
  plan text not null default 'starter' check (plan in ('starter', 'professional', 'enterprise')),
  status text not null default 'active' check (status in ('active', 'cancelled', 'past_due')),
  selar_reference text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.workspace_subscriptions enable row level security;

create policy "Workspace owner can view subscription"
  on public.workspace_subscriptions for select
  using (
    exists (
      select 1 from public.workspaces
      where id = workspace_subscriptions.workspace_id and owner_id = auth.uid()
    )
  );

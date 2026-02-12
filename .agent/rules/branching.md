# Branching Rules for Agents

To ensure isolation and efficiency, this project uses **Git Worktrees** for agent workspaces. This allows each agent to work on its own branch while sharing the root `node_modules`.

## Creating a New Agent Branch
Do NOT manually clone the repo inside itself. Use the provided setup script:

```powershell
.\setup-agent.ps1 -AgentName "your-agent-id"
```

This script will:
1. Create a local branch named `agent/your-agent-id`.
2. Create a worktree folder at `/branches/your-agent-id/`.
3. Automatically initialize and populate submodules (like `public/framework`).

## Working in a Branch
- Always perform your work inside the `/branches/your-agent-id/` directory.
- **Node Modules**: You do not need to run `npm install` inside the branch folder. Node will automatically resolve dependencies from the root directory.
- **Submodules**: If you need to update submodules, run `git submodule update --init --recursive` from within your branch folder.

## Committing and Pushing
You can use standard Git commands while inside your agent folder:

```powershell
cd branches/your-agent-id
git add .
git commit -m "Description of work"
git push -u origin agent/your-agent-id
```

## Security & Isolation
- The `/branches/` directory is ignored by the root `.gitignore`. 
- Your changes will satisfy `git status` only within your specific worktree. 
- Avoid making changes to the root configuration files unless specifically instructed.

## Environment Fixes (Windows)
If you encounter Playwright/Browser host errors like `$HOME environment variable is not set`, ensure the following has been run once on the system:
```powershell
[System.Environment]::SetEnvironmentVariable('HOME', $env:USERPROFILE, 'User')
```

param (
    [Parameter(Mandatory=$true)]
    [string]$AgentName
)

$BranchName = "agent/$AgentName"
$Path = "./branches/$AgentName"

if (!(Test-Path "./branches")) {
    New-Item -ItemType Directory -Path "./branches" | Out-Null
}

if (Test-Path $Path) {
    Write-Host "Error: Workspace already exists at $Path" -ForegroundColor Red
    return
}

Write-Host "Creating branch $BranchName and worktree at $Path..." -ForegroundColor Cyan
git worktree add $Path -b $BranchName

# Submodules require explicit initialization in each worktree
Write-Host "Initializing submodules..." -ForegroundColor Cyan
Push-Location $Path
git submodule update --init --recursive
Pop-Location

Write-Host "Done! You can now work in $Path" -ForegroundColor Green

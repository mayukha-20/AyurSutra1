# PowerShell script to revert Ritucharya page to original version
# Run this script if you want to restore the backup

Write-Host "Reverting Ritucharya page to original version..." -ForegroundColor Yellow

try {
    # Check if backup exists
    if (Test-Path "src\pages\Ritucharya_BACKUP.js") {
        # Copy backup over current file
        Copy-Item "src\pages\Ritucharya_BACKUP.js" "src\pages\Ritucharya.js" -Force
        Write-Host "✅ Successfully reverted Ritucharya.js to original version" -ForegroundColor Green
        Write-Host "📁 Backup file preserved: src\pages\Ritucharya_BACKUP.js" -ForegroundColor Blue
    } else {
        Write-Host "❌ Error: Backup file not found!" -ForegroundColor Red
        Write-Host "Looking for: src\pages\Ritucharya_BACKUP.js" -ForegroundColor Red
    }
}
catch {
    Write-Host "❌ Error reverting file: $_" -ForegroundColor Red
}

Write-Host "`nPress any key to exit..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
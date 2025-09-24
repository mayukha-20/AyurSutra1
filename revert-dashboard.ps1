# PowerShell script to revert to the original dashboard
# Run this if you want to go back to the old dashboard design

Write-Host "=== AyurSutra Dashboard Revert Tool ===" -ForegroundColor Cyan
Write-Host ""

if (Test-Path "src/pages/ProgressDashboardAyursutra_BACKUP.js") {
    Write-Host "Found backup file. Reverting to original dashboard..." -ForegroundColor Yellow
    
    # Copy backup back to main file
    Copy-Item "src/pages/ProgressDashboardAyursutra_BACKUP.js" "src/pages/ProgressDashboardAyursutra.js" -Force
    
    Write-Host "✅ Successfully reverted to original dashboard!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your original dashboard design has been restored." -ForegroundColor White
    Write-Host "The backup file is still available if needed." -ForegroundColor Gray
} else {
    Write-Host "❌ Backup file not found!" -ForegroundColor Red
    Write-Host "Cannot revert - please check if 'ProgressDashboardAyursutra_BACKUP.js' exists" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to continue..."
Read-Host
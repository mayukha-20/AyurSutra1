# PowerShell script to revert to the original practitioner dashboard
# Run this if you want to go back to the old practitioner dashboard design

Write-Host "=== AyurSutra Practitioner Dashboard Revert Tool ===" -ForegroundColor Cyan
Write-Host ""

if (Test-Path "src/pages/PractitionerDashboard_BACKUP.js") {
    Write-Host "Found backup file. Reverting to original practitioner dashboard..." -ForegroundColor Yellow
    
    # Copy backup back to main file
    Copy-Item "src/pages/PractitionerDashboard_BACKUP.js" "src/pages/PractitionerDashboard.js" -Force
    
    Write-Host "✅ Successfully reverted to original practitioner dashboard!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your original practitioner dashboard design has been restored." -ForegroundColor White
    Write-Host "The backup file is still available if needed." -ForegroundColor Gray
} else {
    Write-Host "❌ Backup file not found!" -ForegroundColor Red
    Write-Host "Cannot revert - please check if 'PractitionerDashboard_BACKUP.js' exists" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to continue..."
Read-Host
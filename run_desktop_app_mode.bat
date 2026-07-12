@echo off
title HT ADVERTISING - تشغيل التطبيق (بدون تثبيت Node.js)
echo ============================================================
echo      HT ADVERTISING - نظام إدارة وحجوزات لوحات السويس
echo ============================================================
echo.
echo جاري تشغيل التطبيق كـ نافذة مستقلة على سطح المكتب...
echo.

:: Detect if Google Chrome is installed, otherwise fallback to Microsoft Edge (default on Windows)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app="file:///%~dp0index.html"
) else if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --app="file:///%~dp0index.html"
) else (
    :: Launch using Microsoft Edge which is guaranteed to be on Windows 10/11
    start "" msedge --app="file:///%~dp0index.html"
)

exit

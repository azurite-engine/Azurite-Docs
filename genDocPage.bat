@echo off

python .\bin\scrape.py %1

.\bin\win-x64\AzuriteGenerator.exe
PAUSE

@echo off
echo Building application...
call npm run build

echo Creating deployment directory...
if not exist "deploy" mkdir deploy

echo Copying files...
xcopy /E /I /Y out deploy
copy public\process-form.php deploy
copy public\.htaccess deploy
copy public\config.php deploy

echo Creating ZIP file...
powershell Compress-Archive -Path deploy\* -DestinationPath deployment.zip -Force

echo Deployment package created: deployment.zip

@echo off
setlocal

:: Define the directories to process
set "directories=.\ .\backgrounds .\icons .\projects .\skills .\tiles"

:: Loop through each directory
for %%d in (%directories%) do (
    echo Processing directory: %%d
    :: Find all PNG files in the directory and compress them
    for %%f in (%%d\*.png) do (
        echo Compressing file: %%f
        oxipng -o 4 "%%f"
    )
)

echo Compression complete.
endlocal
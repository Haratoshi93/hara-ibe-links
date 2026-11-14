chcp 65001
@echo off
cd /d "%~dp0"
if not exist venv (
    py -m venv venv
)
call venv\Scripts\activate.bat
pip install -r requirements.txt
python generate_tunagate.py
pause

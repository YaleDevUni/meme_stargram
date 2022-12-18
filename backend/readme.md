Some helpful command before run backend 

-- To run virtual machine...
mac:
1. python -m venv venv
2. source <venv>/bin/activate
windows:
1. c:\>c:\Python35\python -m venv c:\path\to\myenv
2. C:\> <venv>\Scripts\activate.bat


-- To install some requirement package
1. pip install djangorestframework 
    - will add rest framework in .venv/../site-packages
2. python -m pip install django-cors-headers


-- before excute below command, change directory to backend folder
1. python3 manage.py makemigration
    - migrate configuration

2. python3 manage.py migrate
    - migrate to venv

3. python3 manage.py runserver
    - run server in local enviroment

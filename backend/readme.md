Temporary posting api: http://127.0.0.1:8000/api/groups/?format=api

To run backend 

```
sh run.sh
```
or

Manual Method
- To install and run virtual machine...
    - mac:
        1. python -m venv venv
            ```bash
            python -m venv my_venv
            ```
        2. source <venv>/bin/activate
            ```bash
            source my_venv/bin/activate 
            ```
    - windows:
        1. c:\>c:\Python3\python -m venv c:\path\to\myenv
        2. C:\> <venv>\Scripts\activate.bat


- To install requirement packages
    - mac/linux:
        ```bash
        python -m pip install -r requirements.txt
        ```
    - windows:
        ```
        py -m pip install -r requirements.txt
        ```

To apply new migrations

```
sh migrate.sh
```
or

- Before excute below command, change directory to backend folder
    - Install and run virtual machine
        - mac:
            1. python -m venv venv
                ```bash
                python -m venv my_venv
                ```
            2. source <venv>/bin/activate
                ```bash
                source my_venv/bin/activate 
                ```
        - windows:
            1. c:\>c:\Python3\python -m venv c:\path\to\myenv
            2. C:\> <venv>\Scripts\activate.bat

    - migrate configuration
    ```
    python3 manage.py makemigration
    ```
        
    - migrate to sql
    ```
    python3 manage.py migrate
    ```
        
    - run server in local enviroment
    ```
    python3 manage.py runserver
    ```
        

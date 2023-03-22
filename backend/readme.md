# *Before Deploying make sure change SECRETE KEY in settings.py*
# About meme_stargram backend

Our goal is building secured and fast api server by using Django with Rest Framework.
Mainly focused on CRUD Image Post, Filtering Image Post.

# Currently Implemented:
### On User model:
- Register 
- Loging

### On Post model:
- CRUD Posts
- Tagging on Posts
- Class Based Views
- Pagination
- Get Current User Post
- Get Specific User Post

### Authentication:
- JWT authentication

### TODO:
- Filter posts by tagging
- Following other user
- Recommand User Favorite Meme posts
- Support WebP image Format 



To insert very basic data into db, please run this AFTER migration
`sqlite3 db.sqlite3 < ./basic_data.sql`

# To run backend locally

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

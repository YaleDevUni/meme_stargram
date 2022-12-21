echo "install and run virtual environment";
python3 -m venv .venv;
source .venv/bin/activate;

echo "install python packages"
python3 -m pip install -r requirements.txt;

echo "run server";
python3 manage.py runserver;
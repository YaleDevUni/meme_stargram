echo "install python packages"
python -m pip install -r requirements.txt;

echo "install and run virtual environment";
python -m venv .venv;
source .venv/bin/activate;
#  cd ~/repos/meme_stargram/backend;

echo "run migration";
python3 manage.py makemigrations;
python manage.py migrate;

# echo "run migration";
# # python3 manage.py makemigration;
# python manage.py migrate;

echo "run server";
python manage.py runserver;
echo "run virtual environment";
pipenv shell; cd ~/repos/meme_stargram/backend;

echo "run migration";
python manage.py migrate;

echo "run server";
python manage.py runserver;

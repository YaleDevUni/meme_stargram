echo "install and run virtual environment";
python3 -m venv .venv;
source .venv/bin/activate;
#  cd ~/repos/meme_stargram/backend;

echo "install python packages"
python3 -m pip install -r requirements.txt;

echo "run migration";
python3 manage.py makemigrations;
python3 manage.py migrate;
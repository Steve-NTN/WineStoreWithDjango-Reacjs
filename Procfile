release: python manage.py makemigrations
--no-input
release: python manage.py migrate --no-input
release: npm run build

web: gunicorn backend.wsgi --log-file -
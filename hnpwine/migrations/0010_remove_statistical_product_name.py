# Generated by Django 3.1.3 on 2022-05-29 16:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hnpwine', '0009_statistical'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='statistical',
            name='product_name',
        ),
    ]

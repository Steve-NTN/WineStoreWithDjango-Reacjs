# Generated by Django 3.1.3 on 2022-05-19 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hnpwine', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_description_ui',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]

# Generated by Django 3.1.3 on 2022-04-04 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ntnwine', '0003_auto_20220328_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_code',
            field=models.CharField(max_length=150),
        ),
    ]

# Generated by Django 3.1.3 on 2022-03-28 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ntnwine', '0002_auto_20220323_1708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_image',
            field=models.ImageField(blank=True, null=True, upload_to='image'),
        ),
        migrations.AlterField(
            model_name='productcategory',
            name='product_category_image',
            field=models.ImageField(blank=True, null=True, upload_to='image'),
        ),
    ]
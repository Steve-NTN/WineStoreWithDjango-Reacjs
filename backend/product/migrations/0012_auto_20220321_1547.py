# Generated by Django 3.1.3 on 2022-03-21 15:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0011_auto_20220315_0156'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='product_desciption',
            new_name='product_description',
        ),
        migrations.RenameField(
            model_name='productcategory',
            old_name='product_category_desciption',
            new_name='product_category_description',
        ),
    ]
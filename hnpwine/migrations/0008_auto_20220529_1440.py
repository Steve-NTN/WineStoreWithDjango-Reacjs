# Generated by Django 3.1.3 on 2022-05-29 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hnpwine', '0007_delete_test'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_description',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]

# Generated by Django 2.2.1 on 2019-05-10 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_auto_20190509_2154'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='house_number',
            field=models.CharField(max_length=255),
        ),
    ]
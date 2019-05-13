# Generated by Django 2.2.1 on 2019-05-12 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0010_auto_20190510_1553'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='propertyimage',
            name='Property',
        ),
        migrations.AlterField(
            model_name='castleimage',
            name='image',
            field=models.CharField(max_length=9999),
        ),
        migrations.DeleteModel(
            name='Property',
        ),
        migrations.DeleteModel(
            name='PropertyImage',
        ),
    ]
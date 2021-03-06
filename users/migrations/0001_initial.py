# Generated by Django 2.2.1 on 2019-05-07 15:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('phone', models.FloatField(max_length=50)),
                ('email', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('zip', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='UserImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('display_picture', models.CharField(max_length=999)),
                ('userid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.UserInfo')),
            ],
        ),
    ]

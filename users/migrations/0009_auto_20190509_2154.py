# Generated by Django 2.2.1 on 2019-05-09 21:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_auto_20190509_2139'),
    ]

    operations = [
        migrations.CreateModel(
            name='Postcode',
            fields=[
                ('postcode', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('kingdom', models.CharField(max_length=255)),
            ],
        ),
        migrations.RemoveField(
            model_name='profile',
            name='zip',
        ),
        migrations.DeleteModel(
            name='Zip',
        ),
        migrations.AddField(
            model_name='profile',
            name='postcode',
            field=models.ForeignKey(default=101, on_delete=django.db.models.deletion.CASCADE, to='users.Postcode'),
            preserve_default=False,
        ),
    ]

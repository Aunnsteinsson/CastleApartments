# Generated by Django 2.2.1 on 2019-05-13 12:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('properties', '0011_auto_20190512_2059'),
    ]

    operations = [
        migrations.CreateModel(
            name='CastleOffer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('offer', models.IntegerField()),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('castle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='properties.Castle')),
            ],
        ),
    ]

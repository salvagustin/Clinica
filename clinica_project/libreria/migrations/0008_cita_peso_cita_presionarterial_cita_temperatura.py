# Generated by Django 5.1.4 on 2024-12-18 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libreria', '0007_alter_cita_horacita'),
    ]

    operations = [
        migrations.AddField(
            model_name='cita',
            name='peso',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name='cita',
            name='presionarterial',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name='cita',
            name='temperatura',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10),
        ),
    ]
# Generated by Django 5.1.4 on 2024-12-12 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libreria', '0002_alter_paciente_fecha_nacimiento'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='fecha_nacimiento',
            field=models.DateField(),
        ),
    ]

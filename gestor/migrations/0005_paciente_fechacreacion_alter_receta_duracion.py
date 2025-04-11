# Generated by Django 4.2.20 on 2025-04-09 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestor', '0004_receta_fechareceta'),
    ]

    operations = [
        migrations.AddField(
            model_name='paciente',
            name='fechacreacion',
            field=models.DateField(auto_now=True, verbose_name='Fecha de creacion'),
        ),
        migrations.AlterField(
            model_name='receta',
            name='duracion',
            field=models.PositiveIntegerField(verbose_name='Duracion'),
        ),
    ]

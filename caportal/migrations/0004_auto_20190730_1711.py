# Generated by Django 2.2.2 on 2019-07-30 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('caportal', '0003_submittask'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submittask',
            name='msg',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='submittask',
            name='proof_checker',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]

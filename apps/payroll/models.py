# apps/payroll/models.py

from django.db import models

class Luong(models.Model):
    ma_luong = models.CharField(max_length=20, primary_key=True)

    ma_nv = models.ForeignKey(
        'employees.NhanVien',
        on_delete=models.CASCADE
    )

    ky_luong = models.CharField(max_length=50)
    trang_thai = models.CharField(max_length=50)


class Luong_CT(models.Model):
    ma_luong = models.OneToOneField(
        Luong,
        on_delete=models.CASCADE,
        primary_key=True
    )

    luong_co_ban = models.FloatField()
    luong_theo_gio = models.FloatField()
    so_ca_lam = models.FloatField()
    so_gio_lam = models.FloatField()
    thuong = models.FloatField()
    phat = models.FloatField()
    thuc_linh = models.FloatField()
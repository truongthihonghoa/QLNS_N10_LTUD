# apps/contracts/models.py

from django.db import models

class HopDongLaoDong(models.Model):
    ma_hd = models.CharField(max_length=20, primary_key=True)

    ma_nv = models.ForeignKey(
        'employees.NhanVien',
        on_delete=models.CASCADE
    )

    ten_nv = models.CharField(max_length=255)
    loai_hd = models.CharField(max_length=100)
    ngay_bd = models.DateField()
    ngay_kt = models.DateField()
    chuc_vu = models.CharField(max_length=100)
    trang_thai = models.CharField(max_length=50)


class HopDongLD_CT(models.Model):
    ma_hd = models.OneToOneField(
        HopDongLaoDong,
        on_delete=models.CASCADE,
        primary_key=True
    )

    luong_co_ban = models.FloatField()
    luong_theo_gio = models.FloatField()
    so_gio_lam = models.FloatField()
    thuong = models.FloatField()
    phat = models.FloatField()
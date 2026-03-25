# apps/employees/models.py

from django.db import models

class NhanVien(models.Model):
    ma_nv = models.CharField(max_length=20, primary_key=True)
    ho_ten = models.CharField(max_length=255)
    ngay_sinh = models.DateField()
    cccd = models.CharField(max_length=12, unique=True)
    sdt = models.CharField(max_length=15, unique=True)

    chuc_vu = models.CharField(max_length=100)
    vi_tri_vl = models.CharField(max_length=100)
    dia_chi = models.TextField()

    ma_chi_nhanh = models.ForeignKey(
        'branches.ChiNhanh',
        on_delete=models.CASCADE,
        related_name='nhan_viens'
    )

    def __str__(self):
        return self.ho_ten
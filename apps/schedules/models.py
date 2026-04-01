# apps/schedules/models.py

from django.db import models

class LichLamViec(models.Model):
    ma_llv = models.CharField(max_length=20, primary_key=True)
    ngay_lam = models.DateField()
    ca_lam = models.CharField(max_length=50)
    ghi_chu = models.TextField(blank=True, null=True)
    trang_thai = models.CharField(max_length=50)
    ngay_tao = models.DateField()
    ma_chi_nhanh = models.ForeignKey('branches.ChiNhanh', on_delete=models.CASCADE, null=True, blank=True)

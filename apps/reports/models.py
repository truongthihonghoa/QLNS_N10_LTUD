# apps/reports/models.py

from django.db import models

class BaoCao(models.Model):
    ma_bc = models.CharField(max_length=20, primary_key=True)

    ngay_bd = models.DateField()
    ngay_kt = models.DateField()
    ngay_tao = models.DateField()
    tong = models.FloatField()

    ma_tk = models.ForeignKey(
        'accounts.TaiKhoan',
        on_delete=models.CASCADE
    )


class BaoCao_CT(models.Model):
    ma_nv = models.ForeignKey('employees.NhanVien', on_delete=models.CASCADE)
    ma_luong = models.ForeignKey('payroll.Luong', on_delete=models.CASCADE)
    ma_bc = models.ForeignKey(BaoCao, on_delete=models.CASCADE)

    ten_nv = models.CharField(max_length=255)
    so_gio_lam = models.FloatField()
    so_ca_lam = models.FloatField()
    thuong = models.FloatField()
    phat = models.FloatField()
    thuc_linh = models.FloatField()

    class Meta:
        unique_together = ('ma_nv', 'ma_luong', 'ma_bc')
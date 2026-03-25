from django.contrib import admin
from .models import LichLamViec, LichLamViec_CT

# Register your models here.
@admin.register(LichLamViec)
class LichLamViecAdmin(admin.ModelAdmin):
    list_display = ('ma_llv', 'ngay_lam', 'ca_lam', 'trang_thai', 'ngay_tao')
    search_fields = ('ma_llv', 'ngay_lam')
    list_filter = ('ca_lam', 'trang_thai')
    ordering = ('ma_llv',)

@admin.register(LichLamViec_CT)
class LichLamViec_CTAdmin(admin.ModelAdmin):
    list_display = ('ma_llv', 'ma_nv', 'vi_tri_vl')
    search_fields = ('ma_llv', 'ma_nv')
    list_filter = ('vi_tri_vl',)
    ordering = ('ma_llv', 'ma_nv')
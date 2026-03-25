from django.contrib import admin
from .models import NhanVien

# Register your models here.
@admin.register(NhanVien)
class NhanVienAdmin(admin.ModelAdmin):
    list_display = ('ma_nv', 'ho_ten', 'ngay_sinh', 'cccd', 'sdt')
    search_fields = ('ma_nv', 'ho_ten')
    list_filter = ('chuc_vu', 'vi_tri_vl')
    raw_id_fields = ('ma_chi_nhanh',)
    autocomplete_fields = ('ma_chi_nhanh',)
    ordering = ('ma_nv',)
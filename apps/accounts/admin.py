from django.contrib import admin
from .models import TaiKhoan

@admin.register(TaiKhoan)
class TaiKhoanAdmin(admin.ModelAdmin):
    list_display = ('ma_tk', 'ten_dang_nhap', 'quyen', 'ma_nv')
    search_fields = ('ma_tk', 'ten_dang_nhap')
    list_filter = ('quyen',)

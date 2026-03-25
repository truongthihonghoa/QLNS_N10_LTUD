from django.contrib import admin
from .models import Luong, Luong_CT
# Register your models here.

@admin.register(Luong)
class LuongAdmin(admin.ModelAdmin):
    list_display = ('ma_luong', 'ma_nv', 'ky_luong', 'trang_thai')
    search_fields = ('ma_luong', 'ma_nv')
    list_filter = ('ky_luong', 'trang_thai')
    raw_id_fields = ('ma_nv',)
    autocomplete_fields = ('ma_nv',)
    ordering = ('ma_luong',)

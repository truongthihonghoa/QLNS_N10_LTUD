from django.shortcuts import render, redirect
from django.contrib import messages
from .models import TaiKhoan
import logging
from django.contrib.auth.decorators import login_required

logger = logging.getLogger(__name__)

def login_view(request):
    if request.method == 'POST':
        ten_dang_nhap = request.POST.get('username')
        mat_khau = request.POST.get('password')

        try:
            tai_khoan = TaiKhoan.objects.filter(ten_dang_nhap=ten_dang_nhap).first()
            if not tai_khoan:
                messages.error(request, 'Tên đăng nhập hoặc mật khẩu không hợp lệ')
                return render(request, 'accounts/login.html')

            if tai_khoan.mat_khau != mat_khau:
                messages.error(request, 'Tên đăng nhập hoặc mật khẩu không hợp lệ')
                return render(request, 'accounts/login.html')

            request.session['ma_tk'] = tai_khoan.ma_tk
            request.session['quyen'] = tai_khoan.quyen
            
            messages.success(request, 'Đăng nhập thành công')
            return redirect('dashboard')

        except Exception as e:
            logger.error(f"Lỗi đăng nhập: {str(e)}")
            messages.error(request, 'Đăng nhập thất bại, vui lòng thử lại sau')
            return render(request, 'accounts/login.html')

    return render(request, 'accounts/login.html')

@login_required(login_url='/accounts/login/')
def dashboard_view(request):
    # This view will render the dashboard page.
    # You can add context data here to pass to the template if needed.
    return render(request, 'accounts/dashboard.html')

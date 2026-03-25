from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import NhanVien

@login_required(login_url='/accounts/login/')
def employee_list_view(request):
    # In the future, you will fetch employee data from the database here.
    # For now, we just render the template.
    return render(request, 'employees/employee_list.html')

@login_required(login_url='/accounts/login/')
def employee_add_view(request):
    if request.method == 'POST':
        cccd = request.POST.get('cccd')
        sdt = request.POST.get('sdt')

        # Check for duplicates
        if NhanVien.objects.filter(cccd=cccd).exists() or NhanVien.objects.filter(sdt=sdt).exists():
            messages.error(request, 'CCCD hoặc số điện thoại đã tồn tại.', extra_tags='duplicate_error')
            # Return the form with user's previous input
            return render(request, 'employees/employee_add.html', {'form_data': request.POST})

        # If no duplicates, create new employee (logic to be completed)
        # ho_ten = request.POST.get('ho_ten')
        # ...
        # NhanVien.objects.create(...)
        
        messages.success(request, 'Thêm nhân viên thành công!')
        return redirect('employee_list')

    return render(request, 'employees/employee_add.html')

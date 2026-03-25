function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // --- Get All Popup Elements ---
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordPopup = document.getElementById('forgot-password-popup');
    const closeForgotPasswordBtn = document.getElementById('close-forgot-password-btn');
    const cancelForgotPasswordBtn = document.getElementById('cancel-forgot-password-btn');
    const savePasswordBtn = document.getElementById('save-password-btn');

    const confirmCancelPopup = document.getElementById('confirm-cancel-popup');
    const confirmNoBtn = document.getElementById('confirm-no-btn');
    const confirmYesBtn = document.getElementById('confirm-yes-btn');

    const notificationPopup = document.getElementById('notification-popup');
    const notificationBox = document.getElementById('notification-box');
    const notificationTitle = document.getElementById('notification-title');
    const notificationMessage = document.getElementById('notification-message');
    const notificationConfirmBtn = document.getElementById('notification-confirm-btn');

    // --- Forgot Password Popup ---
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (forgotPasswordPopup) forgotPasswordPopup.style.display = 'flex';
        });
    }

    const closeForgotPasswordPopup = () => {
        if (forgotPasswordPopup) forgotPasswordPopup.style.display = 'none';
    };

    // --- Confirm Cancel Popup ---
    const showConfirmCancelPopup = () => {
        if (confirmCancelPopup) confirmCancelPopup.style.display = 'flex';
    };
    const closeConfirmCancelPopup = () => {
        if (confirmCancelPopup) confirmCancelPopup.style.display = 'none';
    };

    if (closeForgotPasswordBtn) closeForgotPasswordBtn.addEventListener('click', showConfirmCancelPopup);
    if (cancelForgotPasswordBtn) cancelForgotPasswordBtn.addEventListener('click', showConfirmCancelPopup);
    if (forgotPasswordPopup) {
        forgotPasswordPopup.addEventListener('click', (e) => {
            if (e.target === forgotPasswordPopup) showConfirmCancelPopup();
        });
    }

    if (confirmNoBtn) confirmNoBtn.addEventListener('click', closeConfirmCancelPopup);
    if (confirmYesBtn) {
        confirmYesBtn.addEventListener('click', () => {
            closeConfirmCancelPopup();
            closeForgotPasswordPopup();
        });
    }

    // --- Notification Popup ---
    const showNotificationPopup = (isSuccess) => {
        closeForgotPasswordPopup();
        
        if (isSuccess) {
            notificationBox.className = 'notification-popup-box success';
            notificationTitle.textContent = 'Đổi mật khẩu thành công';
            notificationMessage.textContent = 'Mật khẩu mới đã được cập nhật.';
        } else {
            notificationBox.className = 'notification-popup-box error';
            notificationTitle.textContent = 'Đổi mật khẩu thất bại';
            notificationMessage.textContent = 'Hệ thống lỗi, không thể thay đổi mật khẩu.';
        }
        if (notificationPopup) notificationPopup.style.display = 'flex';
    };

    const closeAllPopups = () => {
        if (forgotPasswordPopup) forgotPasswordPopup.style.display = 'none';
        if (confirmCancelPopup) confirmCancelPopup.style.display = 'none';
        if (notificationPopup) notificationPopup.style.display = 'none';
    };

    if (notificationConfirmBtn) notificationConfirmBtn.addEventListener('click', closeAllPopups);

    // --- Trigger Notification ---
    if (savePasswordBtn) {
        savePasswordBtn.addEventListener('click', () => {
            const isApiCallSuccessful = Math.random() > 0.5;
            showNotificationPopup(isApiCallSuccessful);
        });
    }
});

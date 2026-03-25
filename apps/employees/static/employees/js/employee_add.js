document.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.querySelector('.employee-form');
    const saveBtn = document.querySelector('.save-btn');
    
    // --- Validation Popup (Client-side) ---
    const validationPopup = document.getElementById('validation-popup');
    const popupExitBtn = document.getElementById('popup-exit-btn');
    const popupBackBtn = document.getElementById('popup-back-btn');

    function showValidationPopup() {
        if (validationPopup) validationPopup.style.display = 'flex';
    }
    function hideValidationPopup() {
        if (validationPopup) validationPopup.style.display = 'none';
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', function(event) {
            if (!employeeForm.checkValidity()) {
                event.preventDefault();
                showValidationPopup();
            }
        });
    }

    if (popupExitBtn) {
        popupExitBtn.addEventListener('click', function() {
            window.location.href = employeeForm.dataset.employeeListUrl;
        });
    }

    if (popupBackBtn) {
        popupBackBtn.addEventListener('click', hideValidationPopup);
    }
    
    if (validationPopup) {
        validationPopup.addEventListener('click', function(event) {
            if (event.target === validationPopup) hideValidationPopup();
        });
    }

    // --- Duplicate Error Popup (Server-side) ---
    const duplicateErrorPopup = document.getElementById('duplicate-error-popup');
    const duplicatePopupExitBtn = document.getElementById('duplicate-popup-exit-btn');
    const duplicatePopupBackBtn = document.getElementById('duplicate-popup-back-btn');

    function showDuplicateErrorPopup() {
        if (duplicateErrorPopup) duplicateErrorPopup.style.display = 'flex';
    }
    function hideDuplicateErrorPopup() {
        if (duplicateErrorPopup) duplicateErrorPopup.style.display = 'none';
    }

    if (duplicatePopupExitBtn) {
        duplicatePopupExitBtn.addEventListener('click', function() {
            window.location.href = employeeForm.dataset.employeeListUrl;
        });
    }

    if (duplicatePopupBackBtn) {
        duplicatePopupBackBtn.addEventListener('click', hideDuplicateErrorPopup);
    }

    if (duplicateErrorPopup) {
        duplicateErrorPopup.addEventListener('click', function(event) {
            if (event.target === duplicateErrorPopup) hideDuplicateErrorPopup();
        });
    }

    // --- Invalid Info Error Popup (Server-side) ---
    const invalidInfoPopup = document.getElementById('invalid-info-popup');
    const invalidInfoPopupExitBtn = document.getElementById('invalid-info-popup-exit-btn');
    const invalidInfoPopupBackBtn = document.getElementById('invalid-info-popup-back-btn');

    function showInvalidInfoPopup() {
        if (invalidInfoPopup) invalidInfoPopup.style.display = 'flex';
    }
    function hideInvalidInfoPopup() {
        if (invalidInfoPopup) invalidInfoPopup.style.display = 'none';
    }

    if (invalidInfoPopupExitBtn) {
        invalidInfoPopupExitBtn.addEventListener('click', function() {
            window.location.href = employeeForm.dataset.employeeListUrl;
        });
    }
    
    if (invalidInfoPopupBackBtn) {
        invalidInfoPopupBackBtn.addEventListener('click', hideInvalidInfoPopup);
    }

    if (invalidInfoPopup) {
        invalidInfoPopup.addEventListener('click', function(event) {
            if (event.target === invalidInfoPopup) hideInvalidInfoPopup();
        });
    }

    // --- Auto-show popups based on server messages ---
    const autoShowDuplicate = document.getElementById('auto-show-duplicate-popup');
    if (autoShowDuplicate) {
        showDuplicateErrorPopup();
    }

    const autoShowInvalidInfo = document.getElementById('auto-show-invalid-info-popup');
    if (autoShowInvalidInfo) {
        showInvalidInfoPopup();
    }
});

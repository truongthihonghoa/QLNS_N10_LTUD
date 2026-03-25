document.addEventListener('DOMContentLoaded', function() {
    const confirmDeletePopup = document.getElementById('confirm-delete-popup');
    const deletePopupNoBtn = document.getElementById('delete-popup-no-btn');
    const deletePopupYesBtn = document.getElementById('delete-popup-yes-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    let deleteUrl = '';

    function showConfirmDeletePopup() {
        if (confirmDeletePopup) confirmDeletePopup.style.display = 'flex';
    }

    function hideConfirmDeletePopup() {
        if (confirmDeletePopup) confirmDeletePopup.style.display = 'none';
    }

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            deleteUrl = this.href; // Get the delete URL from the link
            showConfirmDeletePopup();
        });
    });

    if (deletePopupNoBtn) {
        deletePopupNoBtn.addEventListener('click', hideConfirmDeletePopup);
    }

    if (deletePopupYesBtn) {
        deletePopupYesBtn.addEventListener('click', function() {
            if (deleteUrl) {
                window.location.href = deleteUrl; // Proceed with deletion
            }
        });
    }

    if (confirmDeletePopup) {
        confirmDeletePopup.addEventListener('click', function(event) {
            if (event.target === confirmDeletePopup) {
                hideConfirmDeletePopup();
            }
        });
    }
});

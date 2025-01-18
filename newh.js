document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelector('#srchbx input');

    document.getElementById('srch').addEventListener('click', function() {
        inputElement.classList.add('youtube');
        inputElement.classList.remove('srchbx');

        setTimeout(function() {
            if (document.activeElement !== inputElement) {
                inputElement.classList.remove('youtube');
                inputElement.classList.add('srchbx');
            }
        }, 5000); // 3 seconds
    });

    inputElement.addEventListener('focus', function() {
        inputElement.classList.add('youtube');
        inputElement.classList.remove('srchbx');
    });

    inputElement.addEventListener('blur', function() {
        setTimeout(function() {
            if (document.activeElement !== inputElement) {
                inputElement.classList.remove('youtube');
                inputElement.classList.add('srchbx');
            }
        }, 2000); // 3 seconds
    });
});

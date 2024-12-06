document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', function() {
        let value = parseInt(this.value, 10);
        if (value < 1) {
            this.value = 1;
        }
    });
});

(function () {
    const cutoffHour = 14; // Change this to desired cutoff hour
    const now = new Date();
    const currentHour = now.getHours();

    function disableToday() {
        const today = new Date();
        const todayDate = today.getDate();

        const dateCells = document.querySelectorAll('.ui-datepicker-calendar td');

        dateCells.forEach(cell => {
            if (!cell.classList.contains('ui-datepicker-unselectable') && parseInt(cell.textContent) === todayDate) {
                cell.classList.add('ui-datepicker-unselectable', 'ui-state-disabled');
                cell.removeAttribute('data-handler');
                cell.removeAttribute('data-event');
                cell.removeAttribute('data-month');
                cell.removeAttribute('data-year');
            }
        });
    }

    if (currentHour >= cutoffHour) {
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.ui-datepicker-calendar')) {
                disableToday();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();
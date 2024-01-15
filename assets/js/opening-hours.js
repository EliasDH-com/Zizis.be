/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @since 05/01/2024
 */

document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var currentDay = daysOfWeek[today.getDay()];

    // Remove the "highlight" class from all days
    var allColumns = document.querySelectorAll('.column');
    allColumns.forEach(function (column) {
        column.classList.remove('highlight');
    });

    // Add the "highlight" class to the current day
    var currentColumn = document.getElementById(currentDay.toLowerCase());
    if (currentColumn) {
        currentColumn.classList.add('highlight');
    }
});
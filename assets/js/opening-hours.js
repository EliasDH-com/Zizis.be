/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @since 05/01/2024
 */

document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var currentDay = daysOfWeek[today.getDay()];

    var allBoxes = document.querySelectorAll('.box-day');
    allBoxes.forEach(function (box) {
        var boxDay = box.id.toLowerCase();

        if (boxDay === currentDay) {
            box.classList.add('highlight');
        } else {
            box.classList.add('inactive-day');
        }
    });
});
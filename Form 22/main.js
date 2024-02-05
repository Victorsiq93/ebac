$(document).ready(function () {

    $('#task-form').submit(function (event) {
        event.preventDefault();
        const taskName = $('#taskName').val();
        if (taskName.trim() !== '') {
            const listItem = $('<li>').text(taskName);
            $('#task-list').append(listItem);
            $('#taskName').val('');
        }
    });

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});
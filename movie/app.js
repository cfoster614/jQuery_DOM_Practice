$('#form').on('submit', function (e) {
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    $('tbody').append($('<tr>', { class: 'tbody' }));
    $('.tbody').last().append($('<td>', { text: title }));
    $('.tbody').last().append($('<td>', { text: rating }));
    $('.tbody').last().append($('<button>', { text: 'Remove', id: 'remove', class: 'clear' }));

})

$('table').on('click', 'button', function () {
    if (this.id === 'remove') {
        $(this).closest('tr').remove();
    } else {
        $('.tbody').empty();
    };
});


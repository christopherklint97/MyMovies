// Prevent the links for the stars from refreshing the page
function noRefresh() {
    $('a[href=""]').on('click', e => {
        e.preventDefault();
    });
}

// Highlight the stars after clicking on one
function highlightStars() {
    $('.far').on('click', function () {
        noRefresh();
        resetStars();

        const endStar = $(this)[0].id;

        for (let i = 1; i <= endStar; i++) {
            $(`#${i}`).removeClass('far').addClass('fas');
        }
    });
}

// Reset the stars to not being highlighted
function resetStars() {
    const stars = $('.far, .fas');
    if (stars.hasClass('fas')) {
        stars.removeClass('fas').addClass('far');
    }

    return stars;
}

function saveMovie() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const movieTitle = $('#movie-title')[0].value;
        const movieRating = $('.fas').length;

        console.log(movieTitle, movieRating);

        $('<tr></tr>').addClass(movieTitle).appendTo('tbody');
        $('<td></td>').text(movieTitle).appendTo(`.${movieTitle}`);
        $('<td></td>').text(movieRating).appendTo(`.${movieTitle}`);
    })
}

highlightStars();
saveMovie();
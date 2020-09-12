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

// Save movie rating and add it to the list
function saveMovie() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const movieTitle = $('#movie-title')[0].value.trim();
        const movieRating = $('.fas').length;

        const newRow = $('<tr></tr>');

        $('<td></td>').text(movieTitle).attr('id', movieTitle).appendTo(newRow);
        $('<td></td>').text(movieRating).appendTo(newRow);

        if (!checkDuplicates(movieTitle)) {
            newRow.appendTo('tbody');
            sortMovies();
        }

    })
}

// Check to see if the movie is already in the list
function checkDuplicates(title) {
    try {
        if (title === $(`#${title}`)[0].innerText) {
            alert('This movie is already in the list!');
            return true;
        } else {
            return false;
        }
    }
    catch (e) {
        return false
    }

}

// Sort through the arrays and eleminate duplicates
function sortMovies() {
    let movies = Array.from($('tbody')[0].children);

    console.log(movies);


}



highlightStars();
saveMovie();
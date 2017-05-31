document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('section article:first-child a').addEventListener('click', function () {
        document.querySelector('section article:first-child div').classList.toggle('content');
    });

    document.querySelector('section article:last-child a').addEventListener('mouseover', function () {
        document.querySelector('section article:last-child div').classList.toggle('content');
    });

});
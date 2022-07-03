

// Sticky Header



$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
       
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});


// gallery
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});


// alert
function validateForm() {

    var name = document.getElementById("name").value;

    var c_name = document.getElementById("c_name").value;

    var email = document.getElementsByName("email");

    var number = document.getElementsByName("number");

    var query = document.getElementsByName("query");

    if (name == "") {

        alert('Please enter your Name');

        return false;

    }
    if (c_name == "") {

        alert('Please enter your company name');

        return false;

    }
    if (email == "") {

        alert('Please enter your email');

        return false;

    }
    if (number == "") {

        alert('Please enter your number');

        return false;

    }

    else if (!(query[0].checked || query[1].checked || query[2].checked || query[3].checked)) {

        alert("Please Select Atleast one of your query");

        return false;

    }

    return true;

}
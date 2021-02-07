$('.profile-tabs ul li').click(function() {
    $(this).addClass("active").siblings().removeClass();
})


const tabbtn = document.querySelectorAll('.profile-tabs ul li');

const tab = document.querySelectorAll('.tab');

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
tabs(0);

// binds the change to a select element (_ALL_ select elements):
$('.profile-backgorund').change(function () {
    // assigns the value of the selected option to the 'color' variable
    var color = $(this).val()

    /* changes the CSS of the '#selectBox' element, to set the color
       and updates the text of that element to reflect the chosen option/color:
    */
    $('.profile-side').css('background-color', color);

// triggers the change event, to trigger the change-handler on page-load/DOMready
}).change();



$('.profile-text').change(function () {  
    var color = $(this).val()
    $('.profile-side').css('color', color);
    $('.user-info p').css('color', color);
    $('#bio').css('color', color);

}).change();

$('.profile-header-colour').change(function () {

    var color = $(this).val()

    $('.profileHeader').css('background-color', color);
}).change();


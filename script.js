$("#carousel").carousel({
    interval: 1000,
    wrap: true,
    ride: true,
    keyboard: true,
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$("registration_button").click(function () {
    $("registrator").css("display", "block")
})
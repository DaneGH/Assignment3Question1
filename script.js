$(document).ready(function () {
    showPage('blog');

    $('nav a').click(function (e) {
        e.preventDefault();
        var page = $(this).data('page');
        showPage(page);
    });

    $('#backButton').click(function () {
        showPage('blog');
    });

    $('.burger-menu').click(function () {
        $('nav ul').slideToggle();
    });

    function showPage(page) {
        $('.content-section').hide();
        $('#' + page).show();
    }

    $(document).on("pagecreate", "#pet-services", function() {
        $("#groomingGrid").grid();
    });

    $(document).on("pagecreate", "#pet-services", function() {
        $("#roomTypesCollapsible, #bookingInfoCollapsible, #activitiesCollapse, #registrationCollapsible").collapsible();
    });

    $(document).on("pagecreate", "#pet-services", function() {
        $("#dayCampCollapsibleSet").collapsibleset();
    });
});



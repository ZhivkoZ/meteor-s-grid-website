'use strict';

Template.backBtn.rendered = function () {
    var $backToTopButton = this.$('.js-back-to-top-btn');
    if ($backToTopButton.length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $backToTopButton.removeClass('hidden');
            } else {
                $backToTopButton.addClass('hidden');
            }
        });
        $backToTopButton.on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
    }
};

Template.main.events({
    'click .js-go-to-install': function (e) {
        e.preventDefault();
        $('html, body').stop(true, false).animate({
            scrollTop: $('.docs').position().top
        }, 'slow', 'linear');
    }
});
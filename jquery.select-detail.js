;
(function ($) {
    $.fn.selectDetail = function () {
        var showSelectedOption = function ($element) {
            var key = $element.data('key');

            if (typeof key === 'undefined') {
                $('[data-selected-detail]').hide();
                $('[data-selected-detail="' + $element.val() + '"]').show();
            } else {
                $('[data-selected-detail^="[' + key + ']"]').hide();
                $('[data-selected-detail="[' + key + '][' + $element.val() + ']"]').show();
            }
        };

        return this.each(function (index, element) {
            var $element = $(element);

            $element.addClass('select-detail-active');

            $element.on('change', function () {
                showSelectedOption($element);
            });

            $element.change();
        });
    };
}(jQuery));
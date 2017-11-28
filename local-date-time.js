(function ($)
{
    $.fn.toLocalDateTime = function ()
    {
        return this.each(function ()
        {
            var _this = $(this);
            if (_this.val())
            {
                var dateStr = _this.val();
                if (isDateString(dateStr))
                {
                    _this.val(new Date(dateStr + " UTC").toLocaleString());
                }
            }
            else if (_this.text())
            {
                var dateStr = _this.text();
                if (isDateString(dateStr))
                {
                    _this.text(new Date(dateStr + " UTC").toLocaleString());
                }
            }
            _this.removeClass("local-date-time");
        });
    };
}(jQuery));


$(document).ready(function ()
{
    $(".local-date-time").toLocalDateTime();
});

//Return true if string 'value' is a string of a date
//Looks for three groups of one or more digits seperated by / \ or -
function isDateString(value)
{
    return /^\d{1,4}(\/|\\|\-)\d{1,4}(\/|\\|\-)\d{1,4}/.test(value);
}
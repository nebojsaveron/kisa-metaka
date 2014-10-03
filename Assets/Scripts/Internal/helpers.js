(function () {

    window.helpers = 
    {
        scrollTo: function (element, animationTime_inMiliseconds) {
            animationTime_inMiliseconds = animationTime_inMiliseconds || 500;

            $('html, body').animate({ scrollTop: element.offset().top }, animationTime_inMiliseconds);
        },

        setPageTitle: function(pageTitle)
        {
            document.title = pageTitle + ' | DUMP';
        },

        toUrlFriendlyString: function(text)
        {
            var replaceDiacriticalChars = function(text)
            {
                var dict =
                {
                    'Č': 'C',       'č': 'c',
                    'Ć': 'C',       'ć': 'c',
                    'Ž': 'Z',       'ž': 'z',
                    'Š': 'S',       'š': 's',
                    'Đ': 'D',       'đ': 'd'
                };
                
                for (var entry in dict)
                {
                    var regex = new RegExp(entry, 'g');

                    text = text.replace(regex, dict[entry]);
                }

                return text;
            };
            var replaceWhitespaceCharactersWithDashes = function(text) { return text.replace(/\s/g,            '-'); };
            var replaceMultipleDashesWithOne          = function(text) { return text.replace(/\-+/g,           '-'); };
            var removeSpecialCharacters               = function(text) { return text.replace(/[^a-zA-Z0-9-]/g, '' ); };
            var removeDashesFromBeginningOrEnd        = function(text) { return text.replace(/^\-+|\-+$/g,     '' ); };

            return (
                removeDashesFromBeginningOrEnd(
                    replaceMultipleDashesWithOne(
                        removeSpecialCharacters(
                            replaceWhitespaceCharactersWithDashes(
                                replaceDiacriticalChars(
                                    text.trim()
            ))))));
        }
    }

})();

(function ($) {

    $.fn.searchBox = function() 
    {
        return this.each(function() 
        {
            var input = $(this);

            var buildSkeleton = function () {
                var skeletonHtml =
                    $('<div class="searchBox">                 \
                           <div class="search"></div>          \
                           <div class="cancel"></div>          \
                           <div class="inputContainer"></div>  \
                       </div>');

                return skeletonHtml;
            };

            var skeleton = buildSkeleton();

            input.after(skeleton);

            skeleton.find('.inputContainer').append(input);

            var root   = skeleton;
            var search = root.find('.search');
            var cancel = root.find('.cancel');

            // Funkcije postavljanje vizualnog stanja elementa
            var setState = function()
            {
                // Stanje kada input ima vrijednost
                if (input.val()) 
                {
                    search.hide();
                    cancel.show();
                } 
                else
                {
                    search.show();
                    cancel.hide();
                }
            };

            // Resetira stanje na prazan search box
            var resetState = function() 
            {
                input.val('').change();

                setState();

                input.trigger('keyup');
            };

            // Postavi vizualne efekte 
            cancel.hover
            (
                function() { $(this).addClass   ('ui-state-hover'); },
                function() { $(this).removeClass('ui-state-hover'); }
            );
            root.hover
            (
                function() { $(this).addClass   ('ui-state-hover'); },
                function() { $(this).removeClass('ui-state-hover'); }
            );

            root.focusin (function() { $(this).addClass   ('ui-state-focus'); setState(); })
                .focusout(function() { $(this).removeClass('ui-state-focus'); setState(); });

            cancel.click(function() 
            {
                resetState();
            });

            input.keyup(function(event) 
            {
                if (event.keyCode == 27) // esc
                { 
                    resetState();
                } 
                else 
                {
                    setState();
                }
            });

            setState();

            return root;
        });
    };

})(jQuery);

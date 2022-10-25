        // Select child-checkbox classes all checkbox 
        // And add disabled attributes to them
        $('.child-checkbox input[type=checkbox]').attr('disabled', true);

        // When we check parent-checkbox then remove disabled
        // Attributes to its child checkboxes
        $(document).on('click', '.parent-checkbox input[type=checkbox]', function(event) {
            // If parent-checkbox is checked add disabled attributes to its child
            if ($(this).is(":checked")) {
                a = $(this).closest(".container").find(".child-checkbox > input[type = checkbox]");
                a.attr("disabled", false);
            } else {

                // Else add disabled attrubutes to its all child checkboxes  
                $(this).closest(".container").find(".child-checkbox > input[type = checkbox]").attr("disabled", true);
            }
        });
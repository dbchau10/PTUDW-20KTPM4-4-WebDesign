let otpInput = document.querySelector(".digit-group .input");


    
    function tokenHandler(e) {
        e.preventDefault();

        let pre = document.querySelector('.form-valid');
        pre.querySelector("input").disabled="true";
        e.target.style.display="none";
        let digit = document.querySelector('.digit-group');
        digit.style.display="inline-block";

    }

    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            console.log($(this).parent());
            var parent = $($(this).parent());
            console.log(parent);
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    $('.btn-token').trigger('click');
                }
            }
        });
    });


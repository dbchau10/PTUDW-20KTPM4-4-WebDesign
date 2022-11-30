

    
    function tokenHandler(e) {
        e.preventDefault();

        let pre = document.querySelector('.form-valid');
        pre.querySelector("input").disabled="true";
        e.target.style.display="none";
        let digit = document.querySelector('.digit-group');
        digit.style.display="inline-block";

    }
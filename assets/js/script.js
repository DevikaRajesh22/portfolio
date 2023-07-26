jQuery("#submit-form").validate({
    rules:{
        uname:{
            required:true,
            minlength:5,
        },
        uemail:{
            required:true,
            email:true
        },
        umessage:{
            required:true,
            minlength:8,
            maxlength:250
        }
    },
    messages:{
        uname:{
            required:"Please enter your name",
            minlength:"Name should be atleast 5 characters"
        },
        uemail:{
           required:"Please enter your email",
           email:"Invalid email", 
        },
        umessage:{
            required:"Please enter your message",
            minlength:"Message should be atleast 8 characters",
            maxlength:"Message shouldnt exceed 250 characters"
        }
    },
});
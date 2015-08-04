(function(){
    document.getElementById("submitButton").addEventListener("click",checkLogin,false);
    function checkLogin()
    {
        var emailValue = document.getElementById("email").value ;
        var passwordValue = document.getElementById("password").value;

        if(emailValue === "oren@gmail.com" && passwordValue === "admin123")
        {
            window.open('target.html')/*opens the target page while Id & password matches*/
        }
        else
        {
            alert("Password or Username wrong please try again")/*displays error message*/
        }
    }
})();
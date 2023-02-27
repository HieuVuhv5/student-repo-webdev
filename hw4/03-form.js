// Add your code here


let form = document.querySelector("form");
form.addEventListener("submit", event => {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var sigin_rd = document.getElementsByName("yes_no_rd");
    var date_submit = document.getElementById("date_time").value;

    var sigin_confirm;
    for(i = 0; i < sigin_rd.length; i++) {
        if(sigin_rd[i].checked)
       sigin_confirm= sigin_rd[i].value;
    }

    //alert(sigin_confirm);
    var flag_check = 0;

    if(username == null || username =="")
        username = "no submission";
    else
        flag_check = 1;

    if(email == null || email =="")
        email = "no submission";
    else
        flag_check = 1;
    if(sigin_confirm == null)
        sigin_confirm = "no submission";
    else
        {
         flag_check = 1;


        }
    
    if(date_submit == null || date_submit =="")
        date_submit = "no submission";
    else
        flag_check = 1;

    if(flag_check == 0 )
        {
            //console.log("You must enter some data to submit this form");
            console.warn("You must enter some data to submit this form")
        }
    else
    {
        var username_text = "Username: " + username;
        var email_text ="Email: " + email;
        var sigin_confirm_text ="News letter: " + sigin_confirm;
        var date_submit_text ="Date: " + date_submit;
        console.log("======= Form Submition=======");
        console.log(username_text);
        console.log(email_text);
        console.log(sigin_confirm_text);
        console.log(date_submit_text);
        
    }
  event.preventDefault();
});

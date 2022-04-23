        //------------------Bradley Alex Sedig----------------------------------
        const LoginButton = document.getElementById("LaunchButton")
        //run function when login button is pressed
        LoginButton.onclick = ClickStart
        //reference to the section which contains the login form and will be replaced with the greeting on valid submit. 
        var LoginSection = document.getElementById('login');
        
         
        
        
        
          
       
        
        function ClickStart()
        {
          //varables with reference to each input field's value in html document 
          var firstNameInput = document.getElementById("Fname").value
          var lastNameInput = document.getElementById("Lname").value
          var badgeNumInput = document.getElementById("Bnum").value
          //check that those values length is within a certain range
          if(firstNameInput.length < 21 && firstNameInput.length > 0 
            && lastNameInput.length< 21 && lastNameInput.length  > 0
            && badgeNumInput.length == 3)
          {
            //if they replace the login section with a paragraph section and display a greeting message,
            LoginSection.innerHTML = '<p3>Welcome back, </p3> <br> <h2>' 
            // then in a header below, combine the strings of first and last name input values into the name of the user.
            + firstNameInput + " " + lastNameInput + '</h2>';
          }
          //check if the length of the input values are invalid
          if(firstNameInput.length > 21 || firstNameInput.length == 0 
            || lastNameInput.length> 21 || lastNameInput.length  == 0
            || badgeNumInput.length  != 3)
          {
            // if they are, throw and error
            alert("Invalid login")
          }
        }
    








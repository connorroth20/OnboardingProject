    //Populates a select with countries, depending on the parameters, the country's code or id # will be saved
    //into the select options.
    function countryDropdown(selectName, codeOrId){

    

    //Opens request for handling API data
    var request = new XMLHttpRequest();
    
    request.open('GET', 'https://xc-countries-api.herokuapp.com/api/countries/', true);
    request.onload = function(){
        var data = JSON.parse(this.response)

        //Sorts through the response
        function compareStrings(a, b) {
            // Assuming you want case-insensitive comparison
            a = a.toLowerCase();
            b = b.toLowerCase();
          
            return (a < b) ? -1 : (a > b) ? 1 : 0;
          }

          data.sort(function(a, b){
              return compareStrings(a.name, b.name)
          });
        
          //Handles errors, not found url or not found data
        if(request.status >= 200 && request.status < 400){
            var select = document.getElementById(selectName)


            //Populates the options of a select
            data.forEach(country => {
                //If country code is needed, the option will include this,
                //else it will include the country ID. This is important
                //for posting data and getting state data.
                if(codeOrId == "code")
                {
                    select.options[select.options.length] = new Option(country.name, country.code);
                }
                else
                {
                    select.options[select.options.length] = new Option(country.name, country.id);
                }
                
                
                
                
            })
            
        //error handling
        }else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'It is not working';
            app.appendChild(errorMessage);
        }

        
       



    }

   

        
        

    request.send();


}



 


    //Displays the states of the selected country   
    function showStates(){

        

        //Uses even listener to display chosen country
        let selection = document.querySelector('select');
        let result = document.querySelector('h2')

        //Changes the HTML once selection is chosen
        selection.addEventListener('change', () => {

    


         result.innerText = selection.options[selection.selectedIndex].text
    

        //new request for getting states from API
         var getStates = new XMLHttpRequest();

        //Here the country code is needed to complete the url
         var newUrl = "https://xc-countries-api.herokuapp.com/api/countries/" + selection.options[selection.selectedIndex].value + "/states/"

         getStates.open('GET', newUrl, true );
         getStates.onload = function(){

            var data2 = JSON.parse(this.response)
        


            //Sorts throught the JSON data
        
            function compareStrings(a, b) {
            // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();
          
                return (a < b) ? -1 : (a > b) ? 1 : 0;
             }

           data2.sort(function(a, b){
              return compareStrings(a.name, b.name)
          });


          //Before creating more options, we must first clear what is already inside the select.
          //This will allow for a cleaner look
          function removeOptions(selectElement) {
            var i, L = selectElement.options.length - 1;
            for(i = L; i >= 0; i--) {
               selectElement.remove(i);
            }
         }
         
         // using the function:
         removeOptions(document.getElementById('State-Select'));
          
         

         //Same as before, error handling and populating a select with states this time
        if(getStates.status >= 200 && getStates.status < 400){
            var select = document.getElementById("State-Select")
            
            data2.forEach(state => {

                select.options[select.options.length] = new Option(state.name, state.code);
                
            })
        }else{
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'It is not working';
            app.appendChild(errorMessage);
        }

    }

    //Makes the State select visible
    document.getElementById("State-Label").style.visibility = "visible";
    document.getElementById("State-Select").style.visibility = "visible";


getStates.send();

});


    }


    //Add a country here. Use a button to add a country. The button is going to trigger two inputs that alow the user to type a name and a country code. 
    //These will be two seperate input boxes, with 2 seperate id's to reference them with javascript.
    function inputCountryToAdd(){


        document.getElementById("hideMePls").style.visibility = "hidden"
        //Makes two input forms visible and a post me button
        document.getElementById("AddCountryNameLabel").style.visibility = "visible"
        document.getElementById("countryName").style.visibility = "visible"

        document.getElementById("AddCountryCodeLabel").style.visibility = "visible"
        document.getElementById("countryCode").style.visibility = "visible"
        
        //document.getElementById("postMe").style.visibility = "visible"
        

        
    }
    //this will then post the chosen country
    function postCountry(){

        //Gets reference to the countries in a list, to get the amount of countries there are
        
        var select = document.getElementById("Country-Select")
        
        

        
       
        let nameInput = document.getElementById('countryName')
        let codeInput = document.getElementById('countryCode')

        //Gets the information added from the input form
        let nameMe = nameInput.value;
        let codeMe = codeInput.value;

      

        let postMe = new XMLHttpRequest();

        //posts a request with the current information of the new country
        postMe.open('POST', 'https://xc-countries-api.herokuapp.com/api/countries/', true)
        postMe.setRequestHeader('Content-Type', 'application/json')
        postMe.send(JSON.stringify({
        
            
            name: nameMe,
            code: codeMe
        }))


        //This was just for error handling.
        document.getElementById("changeMePlease").style.visibility = "visible"
        

        document.getElementById("reload").style.visibility = "visible"

         






        



    }

    function showCPostButton(){
        document.getElementById("postMe").style.visibility = "visible"
    }

    //bugs to be fixed: when I change my coutnry selection, I want to replace the state values instead of adding new one
    //fixed

    


    //now, posting a state
    //maybe make a select to find the country to post a state to
    //then use this country id to add a state to the API
    //state API has 3 features:
    //countryID, id, statecode, stateName
    function inputStateToAdd(){


        document.getElementById("hideAddState").style.visibility = "hidden"

        //makes a select visible to choose country to add a state to
        document.getElementById("selectLabel").style.visibility = "visible"
        document.getElementById("countryChooser").style.visibility = "visible"

        //makes the rest visible, similar to country adder
        document.getElementById("AddStateNameLabel").style.visibility = "visible"
        document.getElementById("stateName").style.visibility = "visible"


        document.getElementById("AddStateCodeLabel").style.visibility = "visible"
        document.getElementById("stateCode").style.visibility = "visible"
        
        

    }

    function showSPostButton(){
        document.getElementById("postMe2").style.visibility = "visible"
    }

    

    //Posts the State to the API
    function postState(){

        //gets the second country dropdown, this dropdown has reference to the country ID's instead of coutnry codes
        var select = document.getElementById("countryChooser")



        //Need to get country code
        let countryIdMe = select.value



        let nameInput = document.getElementById('stateName')
        let codeInput = document.getElementById('stateCode')

        //same as before, gets the input from an input form
        let nameMe = nameInput.value;
        let codeMe = codeInput.value;


        

        //posts an HTTP request
        let postMe = new XMLHttpRequest();

        postMe.open('POST',  'https://xc-countries-api.herokuapp.com/api/states/', true)
        postMe.setRequestHeader('Content-Type', 'application/json')
        postMe.send(JSON.stringify({
        //uses processsed data to post  
            //id: stateId,
            name: nameMe,
            code: codeMe,
            countryId: countryIdMe
        }))

        document.getElementById("reload2").style.visibility = "visible"



    }


    //Since I last saw nancy I:
    /*
        Figured out how to static code the state
        figured out visiblilty

        figured out how to clear the options before adding new ones: https://stackoverflow.com/questions/3364493/how-do-i-clear-all-options-in-a-dropdown-box

        static coded the adding a country
        was able to figure out posting a country

        was abke to figure out posting a state
        was difficult to figure out how to post with regards to getting id -> hardest part

        to do:
        add comments, make it look pretty
    */

        //Autorefresh when post
        //hide button when making new state/country
        //have one country dropdown --> take out parameters
        //add styling

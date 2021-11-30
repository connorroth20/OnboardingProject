function countryDropdown(selectName, codeOrId){

    

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
        //sort response
        if(request.status >= 200 && request.status < 400){
            var select = document.getElementById(selectName)


            
            data.forEach(country => {
                if(codeOrId == "code")
                {
                    select.options[select.options.length] = new Option(country.name, country.code);
                }
                else
                {
                    select.options[select.options.length] = new Option(country.name, country.id);
                }
                
                
                
                
            })
            
        
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

        
        document.getElementById("State-Label").style.visibility = "visible";
        document.getElementById("State-Select").style.visibility = "visible";

      
        let selection = document.querySelector('select');
        let result = document.querySelector('h2')

        selection.addEventListener('change', () => {

    


    result.innerText = selection.options[selection.selectedIndex].text
    

    var getStates = new XMLHttpRequest();

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


getStates.send();

});


    }


    //Add a country here. Use a button to add a country. The button is going to trigger two inputs that alow the user to type a name and a country code. 
    //These will be two seperate input boxes, with 2 seperate id's to reference them with javascript.
    function inputCountryToAdd(){


        document.getElementById("AddCountryNameLabel").style.visibility = "visible"
        document.getElementById("countryName").style.visibility = "visible"

        document.getElementById("AddCountryCodeLabel").style.visibility = "visible"
        document.getElementById("countryCode").style.visibility = "visible"
        
        document.getElementById("postMe").style.visibility = "visible"
        

        
    }
    //this will then post the chosen country
    function postCountry(){

        var select = document.getElementById("Country-Select")
        

        let  idMe = select.options.length + 1;

        
       
        let nameInput = document.getElementById('countryName')
        let codeInput = document.getElementById('countryCode')

        let nameMe = nameInput.value;
        let codeMe = codeInput.value;

      

        let postMe = new XMLHttpRequest();

        postMe.open('POST', 'https://xc-countries-api.herokuapp.com/api/countries/', true)
        postMe.setRequestHeader('Content-Type', 'application/json')
        postMe.send(JSON.stringify({
        
            id: idMe,
            name: nameMe,
            code: codeMe
        }))


        document.getElementById("changeMePlease").style.visibility = "visible"
        

         






        



    }

    //bugs to be fixed: when I change my coutnry selection, I want to replace the state values instead of adding new one
    //fixed

    


    //now, posting a state
    //maybe make a select to find the country to post a state to
    //then use this country id to add a state to the API
    //state API has 3 features:
    //countryID, id, statecode, stateName
    function inputStateToAdd(){



        document.getElementById("selectLabel").style.visibility = "visible"
        document.getElementById("countryChooser").style.visibility = "visible"

        document.getElementById("AddStateNameLabel").style.visibility = "visible"
        document.getElementById("stateName").style.visibility = "visible"


        document.getElementById("AddStateCodeLabel").style.visibility = "visible"
        document.getElementById("stateCode").style.visibility = "visible"
        
        document.getElementById("postMe2").style.visibility = "visible"

    }

    function addCountryWithCode(){

    }

    //Posts the State to the API
    function postState(){

        var select = document.getElementById("countryChooser")



        //Need to get country code
        let countryIdMe = select.value

        //now get state id --> don't think this will work, need to find a way to get all the state data. Maybe a get call to the API first then store the last state + 1
        var stateId = 0
       

        var request = new XMLHttpRequest();
    
        request.open('GET', 'https://xc-countries-api.herokuapp.com/api/states/', true);
        request.onload = function(){

            var data = JSON.parse(this.response)
            console.log(data[data.length-1].id)
            stateId = data[data.length-1].id + 1

        }
        request.send()
        
        //yeah I think open a request here to get the names id of the last state.


        let nameInput = document.getElementById('stateName')
        let codeInput = document.getElementById('stateCode')

        let nameMe = nameInput.value;
        let codeMe = codeInput.value;


        

        let postMe = new XMLHttpRequest();

        postMe.open('POST',  'https://xc-countries-api.herokuapp.com/api/states/', true)
        postMe.setRequestHeader('Content-Type', 'application/json')
        postMe.send(JSON.stringify({
        
            id: stateId,
            name: nameMe,
            code: codeMe,
            countryId: countryIdMe
        }))

    }
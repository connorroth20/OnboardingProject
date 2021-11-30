function countryDropdown(){
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
            var select = document.getElementById("Country-Select")
            data.forEach(country => {
                select.options[select.options.length] = new Option(country.name, country.code);
                
                
            })
            //data.forEach(country => {
               //const option = document.createElement('option');
               //option.setAttribute('id', country.id);
               //option.setAttribute('value', country.code);

               
               
               
               //option.innerHTML = country.name;
               //countries.appendChild(option)

               


            //}) 
           
            
           
            


            

        
        }else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'It is not working';
            app.appendChild(errorMessage);
        }

    }

        
        

    request.send();


}



 
    
    function showStates(){

        const app = document.getElementById('root');
        let selection = document.querySelector('select');
        let result = document.querySelector('h2')

selection.addEventListener('change', () => {


    result.innerText = selection.options[selection.selectedIndex].text
    //selection.options[selection.selectedIndex].text;

    var getStates = new XMLHttpRequest();

    const stateForm = document.createElement('form')


    const stateSelector = document.createElement('label')
    stateSelector.innerHTML = "Please select a state";

    const states = document.createElement('select')

    stateForm.appendChild(stateSelector)
    stateForm.appendChild(states)

    app.appendChild(stateForm)

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

          
       
        if(getStates.status >= 200 && getStates.status < 400){
            data2.forEach(state => {
                const stateOption = document.createElement('option')
                stateOption.setAttribute('id', state.id)
                stateOption.setAttribute('value', state.code)

                stateOption.innerHTML = state.name;
                states.appendChild(stateOption)
                
                
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
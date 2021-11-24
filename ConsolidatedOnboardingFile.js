function countryDropdown(){
    const app = document.getElementById('root');
    const form = document.createElement('form');


    const label = document.createElement('label');
    label.innerHTML = "Please select a country";

    const countries = document.createElement('select');
    countries.setAttribute('name', 'countries');

    

    form.append(label);
    form.appendChild(countries);
    app.appendChild(form);
    


   

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
            data.forEach(country => {
               const option = document.createElement('option');
               option.setAttribute('id', country.id);
               option.setAttribute('value', country.code);

               
               
               
               option.innerHTML = country.name;
               countries.appendChild(option)

               


            }) 
           
            
           
            


            

        
        }else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'It is not working';
            app.appendChild(errorMessage);
        }

        
        }

    request.send();


}



 
    
    function showstates(country){

       
        let selection = document.querySelector('select');
        let result = document.querySelector('h2')

        selection.addEventListener('change', () => {


         result.innerText = selection.options[selection.selectedIndex].text
    //selection.options[selection.selectedIndex].text;

        var stateRequest = new XMLHttpRequest();

        const stateForm = document.createElement('form')


        const label2 = document.createElement('label')
        label2.innerHTML = "Please select a state";

        const states = document.createElement('select')

        stateForm.appendChild(label2)
        stateForm.appendChild(states)

        app.appendChild(stateForm)

        var newUrl = "https://xc-countries-api.herokuapp.com/api/countries/" + selection.options[selection.selectedIndex].id + "/states/"

         stateRequest.open('GET', newUrl, true );
         stateRequest.onload = function(){

            
    

        var stateData = JSON.parse(this.response)


        function compareStrings(a, b) {
            // Assuming you want case-insensitive comparison
            a = a.toLowerCase();
            b = b.toLowerCase();
          
            return (a < b) ? -1 : (a > b) ? 1 : 0;
          }

          stateData.sort(function(a, b){
              return compareStrings(a.name, b.name)
          });
        //sort states
        if(stateRequest.status >= 200 && request.status < 400){
            stateData.forEach(state => {
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


stateRequest.send();

});
    }
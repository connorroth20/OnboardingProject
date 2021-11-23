//My javascript file for the onboarding project



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
        if(request.status >= 200 && request.status < 400){
            data.forEach(country => {
               const option = document.createElement('option');
               option.setAttribute('id', country.code);
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

    function showstates(country){

       
        var countryId = document.getElementById(country).value

            if(countryId){

                var request2 = new XMLHttpRequest();

                const stateForm = document.createElement('form')
    
    
                const label2 = document.createElement('label')
                label2.innerHTML = "Please select a state";
            
                const states = document.createElement('select')
            
                stateForm.appendChild(label2)
                stateForm.appendChild(states)
            
                app.appendChild(stateForm)
            
                var newUrl = "https://xc-countries-api.herokuapp.com/api/countries/" + country.code + "/states/"
            
                request2.open('GET', newUrl, true );
                request2.onload = function(){
                    var data2 = JSON.parse(this.response)
                    if(request2.status >= 200 && request.status < 400){
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

            


        }
        request2.send();
    }

    /*
    //If country is selected
    const stateForm = document.createElement('form')
    
    
    const label2 = document.createElement('label')
    label2.innerHTML = "Please select a state";

    const states = document.createElement('select')

    stateForm.appendChild(label2)
    stateForm.appendChild(states)

    app.appendChild(stateForm)

    var newUrl = "https://xc-countries-api.herokuapp.com/api/countries/" + country.code + "/states/"

    request.open('GET', newUrl, true );
    request.onload = function(){
        var data2 = JSON.parse(this.response)
        if(request.status >= 200 && request.status < 400){
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

    */
    


//make a list of objects of countries that contain name, id, and states
//'https://xc-countries-api.herokuapp.com/api/countries/')






//Add children to html in the select, so add an option for each county within the list.
//Can do this using javascript *see link above, or research. 
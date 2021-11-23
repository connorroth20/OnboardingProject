//My javascript file for the onboarding project



    const app = document.getElementById('root');
    const form = document.createElement('form');


    const label = document.createElement('label');
    label.innerHTML = "Please select a country";

    const select = document.createElement('select');
    select.setAttribute('name', 'countries');

    

    form.append(label);
    form.appendChild(select);
    app.appendChild(form);
    


   

    var request = new XMLHttpRequest();
    
    request.open('GET', 'https://xc-countries-api.herokuapp.com/api/countries/', true);
    request.onload = function(){
        var data = JSON.parse(this.response)
        if(request.status >= 200 && request.status < 400){
            data.forEach(country => {
               const option = document.createElement('option');
               option.setAttribute('id', country.id);
               option.setAttribute('value', country.code);
               
               
               option.innerHTML = country.name;
               select.appendChild(option)


            })
        }else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'It is not working';
            app.appendChild(errorMessage);
        }
        }

    request.send();
    


//make a list of objects of countries that contain name, id, and states
//'https://xc-countries-api.herokuapp.com/api/countries/')






//Add children to html in the select, so add an option for each county within the list.
//Can do this using javascript *see link above, or research. 
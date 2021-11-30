//Part 2 of java onboarding

//consolidate files --> Done
//sort--> Done
//static code html

//Where you are at:
//Static code the second select. So try to get it to appear rather than crate a new one each time.
//Try to consolidate the two scripts into one file and then put them onto the html --> 2 seperate functions


const app = document.getElementById('root');
let selection = document.querySelector('select');
let result = document.querySelector('h2')

selection.addEventListener('change', () => {


    result.innerText = selection.options[selection.selectedIndex].text
    //selection.options[selection.selectedIndex].text;

    var request2 = new XMLHttpRequest();

    const stateForm = document.createElement('form')


    const stateSelector = document.createElement('label')
    stateSelector.innerHTML = "Please select a state";

    const states = document.createElement('select')

    stateForm.appendChild(stateSelector)
    stateForm.appendChild(states)

    app.appendChild(stateForm)

    var newUrl = "https://xc-countries-api.herokuapp.com/api/countries/" + selection.options[selection.selectedIndex].value + "/states/"

    request2.open('GET', newUrl, true );
    request2.onload = function(){

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


request2.send();

});
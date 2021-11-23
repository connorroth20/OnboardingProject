//Part 2 of java onboarding

let selection = document.querySelector('select');
let result = document.querySelector('h2')

selection.addEventListener('change', () => {


    result.innerText = selection.options[selection.selectedIndex].text
    //selection.options[selection.selectedIndex].text;

    var request2 = new XMLHttpRequest();

    const stateForm = document.createElement('form')


    const label2 = document.createElement('label')
    label2.innerHTML = "Please select a state";

    const states = document.createElement('select')

    stateForm.appendChild(label2)
    stateForm.appendChild(states)

    app.appendChild(stateForm)

    var newUrl = "https://xc-countries-api.herokuapp.com/api/countries/" + selection.options[selection.selectedIndex].id + "/states/"

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


request2.send();

});
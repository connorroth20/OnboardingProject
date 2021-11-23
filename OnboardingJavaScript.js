//My javascript file for the onboarding project



    const app = document.getElementById('root')
    const form = document.createElement('form')
    const label = document.createElement('label')
    label.innerHTML("Please Select a Country")

    const select = document.createElement('select')

    const container = document.createElement('div')


    container.setAttribute('class', 'container')
    form.append(label)
    form.appendChild(select)
    app.appendChild(form)
    app.appendChild(container)


   

    var request = new XMLHttpRequest()
    
    request.open('GET', 'https://xc-countries-api.herokuapp.com/api/countries/')
    request.onload = function(){
        var data = JSON.parse(this.response)
        if(request.status >= 200 && request.status < 400){
            data.forEach(country => {
               const option = document.createElement('option')
               option.innerHTML(country.name)

               select.appendChild(option)


            })
        }else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'It is not working';
            app.appendChild(errorMessage)
        }
        }
    


//make a list of objects of countries that contain name, id, and states
//'https://xc-countries-api.herokuapp.com/api/countries/')






//Add children to html in the select, so add an option for each county within the list.
//Can do this using javascript *see link above, or research. 
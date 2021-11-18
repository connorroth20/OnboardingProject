//My javascript file for the onboarding project
console.log("hello there");

//make a list of objects of countries that contain name, id, and states

const getData = async() => {
    let data = [];
    const countries = await fetch("https://xc-countries-api.herokuapp.com/api/countries/")
    .then((res) => res.json());
  data.push(countries.name);

  const country2 = await fetch("https://xc-countries-api.herokuapp.com/api/countries/")
    .then((res) => res.json());
  data.push(country2.name);
  
  console.log(data);


}




getData()

//or try this:

function getCountriesTwo() {
    fetch("https://xc-countries-api.herokuapp.com/api/countries/")
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Here you need to use an temporary array to store NeededInfo only 
            let tmpArray = []
            for (var i = 0; i < data.results.length; i++) {
                tmpArray.push(data.results[i].name)
            }

            this.setState({
                other: tmpArray
            })
        });
};

getCountriesTwo()





//Add children to html in the select, so add an option for each county within the list.
//Can do this using javascript *see link above, or research. 
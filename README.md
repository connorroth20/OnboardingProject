# OnboardingProject
Onboarding Project For Exelaration
Countries and States
Your wrap-up exercise for your onboarding is to make a website (can be just a single HTML page) that will use JavaScript to get data from an external REST API. 
The details are as follows:

When the page loads, populate a dropdown menu with the results from a GET call to https://xc-countries-api.herokuapp.com/api/countries/
When a country is selected from the country dropdown, populate a second dropdown with the results from a GET call to https://xc-countries-api.herokuapp.com/api/countries/<country_code>/states/
Once all of that is done, create a way to add a new country by sending a POST call to https://xc-countries-api.herokuapp.com/api/countries/
Create a way to add new states by sending a POST call to https://xc-countries-api.herokuapp.com/api/states/
Insomnia and Postman are tools for interacting with REST APIs (which is what https://xc-countries-api.herokuapp.com/api/ is), 
so feel free to use them to experiment and understand the data your page will be receiving from the GET requests, and what it should send in a POST request.

Stretch Goals
You may be referred to these activities by your mentor after completing the standard behavior described above. 
They are intended to increase your experience and understanding of a particular technology stack.

React Frontend:
Same behavior as the standard frontend, but written in ReactJS with reusable components.
Dropdown behavior can be shared for Countries and States and configured via props.
A good primer on bind in JavaScript and it's use in ReactJS: Explaining why we bind things in React
Django backend:
Create a backend in Django that works with either Frontend
Behavior should match the heroku endpoint, so the frontend code should only have to change to use a new base URL (get countries and get states for a country)
Django REST Framework Backend:
Adapt the Django backend to Django REST Framework using Serializers and APIView

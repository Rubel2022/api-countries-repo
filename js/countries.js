const loadCountries=()=>{
  fetch('https://restcountries.com/v2/all')
  .then(res=> res.json())
  .then(data=>displayCountries(data) )
}
loadCountries()
const displayCountries=(countries)=>{
  const countrShow=document.getElementById('all_country') 
  for(const country of countries){
    console.log(country)
    const div =document.createElement('div')
    div.classList.add('countries')
    div.innerHTML=`
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <button onclick="loadCountryDetails('${country.name}')">Details</button>

    `
    countrShow.appendChild(div)
  }
}
const loadCountryDetails=(name)=>{
const url=`https://restcountries.com/v2/name/${name}`
fetch(url)
.then(res=>res.json())
.then(data=>displayCountryDetails(data[0]))
displayCountryDetails.textcontent=""
}
const displayCountryDetails=(country)=>{
  
  const countryDetails=document.getElementById('country-details')
    const div=document.createElement('div')
    div.innerHTML=`
    <h3>${country.name}</h3>
    <h3>${country.capital}</h3>
    <img width="400px" height="300px" src="${country.flag}">
    `
    countryDetails.appendChild(div)
  
}
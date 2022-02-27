const loadRandom=()=>{
  fetch('https://randomuser.me/api/?results=155')
  .then(res=>res.json())
  .then(data=>displayRandom(data))
}
loadRandom()
const displayRandom=(data)=>{
  console.log(data.results)
  const buddies=data.results;
  const buddiesDiv=document.getElementById('buddies')
  for(const buddy of buddies){
    console.log(buddy)
    const p=document.createElement('p')
    p.innerHTML=`
    <h3>Name:${buddy.name.title }  ${ buddy.name.first} ${ buddy.name.last} Email:${buddy.email}</h3>
    <h3></h3>
    `
    buddiesDiv.appendChild(p)
  }
  
}

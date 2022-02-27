function loadUser (){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())
.then(data=>displayUsers(data))
}
// loadUser()
const displayUsers=(users)=>{
  // console.log(users)
  const usersContainer=document.getElementById('users')
  for(const user of users){
    console.log(user)
    const li=document.createElement('li')
    li.innerText=`name:${user.name}, userName: ${user.username},Email: ${user.email}`
    usersContainer.appendChild(li)
  
  }
}
function loadPost(){
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>res.json())
.then(data=>displayPost(data))
}

const displayPost=(posts)=>{
  const postContainer=document.getElementById("posts")
  for(const post of posts){
    console.log(post)
    
    const div=document.createElement('div')
    div.classList.add('post-style')
    div.innerHTML=`
      <h4>${post.postId}</h4>
      <h4>${post.id}</h4>
      <h3>${post.name}</h3>
      <h4>${post.email}</h4>
      <p>${post.body}</p>
    `
    postContainer.appendChild(div)
  }
}
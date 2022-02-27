const students={
  id:'18EEE133',
  name:'Rubel',
  mejorSubject:'EEE',
  subject:['math107','eng101','phy202','eee101'],
  money:5000,
  Text:function(){
    console.log(this.name,'is a student')
  },
  cost:function(taka,boksis){
   const cost= this.money;
   const totalCost= cost-taka-boksis;

    return totalCost;
  }
}
for(const student in students){
  // console.log(students[student])
  
}
for(const[key,value] of Object.entries(students)){
  console.log(key,value)
}
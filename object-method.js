const student={
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
student.Text()
const value=student.cost(1000,200);
console.log(value)
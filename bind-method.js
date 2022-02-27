const studetDetails = {
  id:'18EEE133',
  name:'Rubel',
  mejorSubject:'EEE',
  subject:['math107','eng101','phy202','eee101'],
  money:5000,
  Text:function(){
    console.log(this.name,'is a student')
  },
  cost:function(taka){
   this.money=this.money-taka
  console.log(this)
    return this.money;
  }
  }



// studetDetails.Text()
// const value=studetDetails.cost(1000);
// console.log(value)
const student2={
  id:'18eee155',
  name:'sadman',
  money:5000,
  majorsubject:"eee"
}
// const totalCost=studetDetails.cost.bind(student2);
// totalCost(500)
 
studetDetails.cost.call(student2,500)
studetDetails.cost.call(student2,300)


  
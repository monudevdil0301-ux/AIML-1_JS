// console.log("Hello World");
// document.write("Hello World");
//  <script type="text/javascript"> 
// var num = 10;
// console.log(num);
// console.log(typeof(num));

// num=false;
// console.log(num);
// console.log(typeof(num));

// num="Naveen";
// console.log(num);
// console.log(typeof(num));

// num=null;
// console.log(num);
//
 //console.log(typeof(num));

// num=undefined;
// console.log(num);
// console.log(typeof(num));
// const Sym1 = Symbol("4");
// console.log(Sym1);
// const Sym2 = Symbol("5");
// console.log(Sym2);
// if(Sym1 === Sym2){
//     console.log("Sym1 and Sym2 are same");
// }
// else{
//     console.log("Sym1 and Sym2 are different");
// }
// 
// var a= 10;
// var b= 20;
// var linebreak="<br/>";

// document.write("(a,b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak)
// var count;
// document.write("starting loop"+"<br/>");
// for(count=1;count<=10;count++){
//     document.write("current count:"+count);
//     document.write("<br/>");

// }
// document.write("loop stopped!")
// const person={
//     fname:"Naveen",
//     lname:"Kumar",
//     age:30
// };
// for(let x in person ){
//     console.log("person details:"+x+"="+person[x]);
// }
// var myInfo = new Array();
// //var myInfo1 = Array();
// console.log(myInfo, myInfo1);
// let collection = [
// {}, [], true, "john", function () {}, 90009898193, undefined, null, new String("abc"), new Date(), ];

// collection.teacherName = "John Mac";
// collection.phoneNo = 950008193;
// console.log(collection);
// var trainerinfo = ["Jitendra" , 29, "Ghaziabad", {isMarried:true}];

// console.log(trainerinfo[trainerinfo.length-1]);
// const result =document.getElementById("para");
// result .innerHTML ="my self";
// result.title ="myname";
// const result2= document.getElementsByClassNameName("heading");
// result2.innerHTML ="hii"
// const element=document.getElementById("my H1");
// let text=element.getAttribute("class");
// document.getElementById("demo").innerHTML=text;
const x=document.querySelector("INPUT");
x.addEventListener('focus' , onhandlefocus);
x.addEventListener('blur' , onhandleblur);

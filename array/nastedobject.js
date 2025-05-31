// let emp={
//     emo_name:"ashisc",
//     emo_id:1,
//     emo_designation:"SDE",
//     emo_account :{
//       emo_account: 123443,
//       emo_blance : 2330
//     }
// }

// // object ke ander ke object ki value ko access karne ka tarika
// console.log(emp.emo_account.emo_blance);

//ek object rahega jisme 10 elemnet honge jiski key find karna hai 
//vo bhi first
//for(let k in emp){
 //console.log(k);
 
//}

let person={
  name:"Rohit",
  age:18,
  city:"bpl",
  contact:1245,
  education:"b.tech",
  year:3,
  hobbie:"study",
  collage:"tit",


}
let k = Object.keys(person)
let c = Object.values(person)

console.log(k[0]);
console.log(c);

// for( j=8;j>=k;j--){
//   console.log(k[j]);
// }
// console.log(k[j]);
// for(k in person){
//   // console.log(k);
  
// }
// if(k==name){
// console.log(k);
// }
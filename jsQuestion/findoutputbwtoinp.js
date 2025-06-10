
// console.log(n1);
const plen=()=>{
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    console.log(n1);
    console.log(n2);
    let rev=0;
    let r1;
let i
 let r= document.getElementById('result');
    while( i>n1){
      for(let i=n1;i<n2;i++){
      r1=n1%10
      rev=rev*10+r;
      n1=Math.floor(n1/10)
      }
     
      
}
     r.innerHTML=rev  
}
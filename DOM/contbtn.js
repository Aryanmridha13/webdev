let c= 0

function increment(){
    
    c++
    let v =document.getElementById('count')
if(c%2==0){
       v.style.color="red"
       document.getElementById('count').innerHTML=c
    }
    else{
    document.getElementById('count').innerHTML=c
    v.style.color="black"
    }
}

function diccrement(){
//     c--

//    let v= document.getElementById('count')
//    v.innerHTML=c

if(c>0){
    // v.innerHTML=0
     c--

   let v= document.getElementById('count')
   v.innerHTML=c
}
    
}

function reset(){
    c=0
    document.getElementById('count').innerHTML=c
    
}

let t = document.getElementById("text")
function fun(){
   t.innerHTML="get out"
   t.style.color="blue"
}

function fun1(){
    t.innerHTML="hover on me"
   t.style.color="black"
}
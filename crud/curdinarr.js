let creat_btn=document.getElementById("create")
let read_btn=document.getElementById("read")
let update_btn=document.getElementById("update")
let delete_btn=document.getElementById("remove")
let data3=document.getElementById("ineer3")
let arr =[]

let creat_from=document.getElementById("ineer1")
let add1=()=>{
    let x=document.getElementById('inp1').value 
    console.log(x);
    
    arr.push(x)
     Object.assign(creat_from.style,{
        left:"-100%",
        top:"30vh"
    })

}
creat_btn.addEventListener("click",function(){
    Object.assign(creat_from.style,{
        left:"0%",
        top:"20vh"
    })
    
})
read_btn.addEventListener("click",function(){
    let data=document.getElementById("ineer2")
   let data1=arr.map((e)=>{
    return e
   })
   if(data1.length==0){
    data.innerHTML="<h1> no Element in array</h1>"
   }else{
    data.innerHTML=data1;
   }
})

const handelupdate=()=>{
    // let data3=document.getElementById("ineer3")
   let data=document.getElementById('finddata').value 
   let data1=document.getElementById("updatedata").value
   let ind=arr.findIndex((e)=>e===data)
   if(ind==-1){
    //    data3.innerHTML="<h1> data not found </h1>"
    console.log("not found");
    
   }
   else{
       arr[ind]=data1;
   }
}

update_btn.addEventListener("click",function(){
    

})

const handeldelete=()=>{
    
   let data=document.getElementById('finddelete').value 
   
   let ind=arr.findIndex((e)=>e===data)
   if(ind==-1){
    //    data3.innerHTML="<h1> data not found </h1>"
    console.log("not found");
    
   }
   else{
       arr.splice(ind,1)
   }
}

delete_btn.addEventListener("click",function(){
    alert("creat")
})
let creat_btn=document.getElementById("create")
let read_btn=document.getElementById("read")
let update_btn=document.getElementById("update")
let delete_btn=document.getElementById("remove")

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
        top:"5vh"
    })
    
})
read_btn.addEventListener("click",function(){
    alert(arr)
})
update_btn.addEventListener("click",function(){
    alert("creat")
})
delete_btn.addEventListener("click",function(){
    alert("creat")
})
let arr=[];
let h1=document.getElementById("h1")

function creat(){
    let inp1=document.getElementById("inp1").value
    for(let i=0;i<inp1;i++){
        arr[i]=prompt("Enter value")
        h1.style.display=("block")
        h1.innerText=arr[i]
        
    }
}
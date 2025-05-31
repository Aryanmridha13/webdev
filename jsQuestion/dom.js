let li=document.getElementsByTagName("li")
li[3].textContent="about"

for(let i = 0;i<li.length;i++){
    if(i%2!=0){
        li[i].style.backgroundColor="blue"
        li[i].style.color="white"
        // li[i].textContent="hello"
    }
    li[i].textContent="name"
    console.log(i);
    
}
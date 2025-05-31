let head =document.getElementById("head1")
head.textContent="form js" //this is use to change text of an tag

let head2=document.getElementById('head2')
head2.innerHTML="<i> coffie break </i>"//for adding tags or change text 

let list=document.getElementsByTagName('li')//tags name return node  list array formate  
list[3].textContent="About"//indexing use karni padegi
for(let i=0;i<list.length;i++){
    list[i].textContent="About"
}
list[2].style.backgroundColor="red"


//make a list and add 10 element and even bale ka text color whilte and bgcolor =blue

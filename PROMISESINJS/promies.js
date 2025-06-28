let p = new Promise((a,r)=>{
    let car= fetch("https://fakestoreapi.in/api/products");
    if(car){
        car.then((e)=>{
            a(e.json())
        })
    }else{
        r("rejact")
    }
})

let div=document.getElementById("div1")
p.then((e)=>{
    let data=e.products
    console.log(data);
    
    data.map((e)=>{
    
        div.innerHTML=`
        <h1>${e.id}</h1>
        <h1>${e.color}</h1>
        <h1>${e.category}</h1>
        <img src="${e.image}" alt="image" height="100px"> <br>
        <h1>${e.description}</h1>
        

        `

    })
    
})

// fatch and than 


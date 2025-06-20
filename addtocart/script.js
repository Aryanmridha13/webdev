import product from "./ourproduct.js"

let pad=document.getElementById("prod")

pad.innerHTML= product.map((e)=>{
    return`
     <div  >
            <h3>ID:${e.id}</h3>
            <img src="${e.img}" alt="image" >
            <br>
            <strong>PRICE:${e.price}</strong>
            <button onclick="ADDPRICE(${e.price})">ADD</button>
            <button onclick="REMOVEPRICE(${e.price})">SUB</button>
          </div>
    `

})


let p=0;
window.ADDPRICE=(price)=>{
p=p+price;
alert(p)
}
window.REMOVEPRICE=(price)=>{
p=p-price;
alert(p)
}
const cart=[];

// Function to add an item to the cart      
function insertitem(){
    const name =document.getElementById("name").value;
    console.log(name)
    const quantity=document.getElementById("quantity").value;
    const price =document.getElementById("price").value;
    cart.push({name,quantity,price});
    console.log(cart);  
}
const row=document.getElementById("row").value;
console.log(row)
row.innerHTML=`${cart.name}`;

console.log(cart);

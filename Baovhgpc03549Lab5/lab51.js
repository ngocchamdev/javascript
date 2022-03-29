function display() {

   document.getElementById("pro");
   var pro =document.getElementById("pro");

   document.getElementById("qty");
   var qty=document.getElementById("qty");

   var name= pro.innerText;
   var price = pro.getAttribute("data-price");

   var quantity= qty.value;
   var amount=price * quantity;

   document.getElementById("name").innerText=name;
   document.getElementById("amount").innerText=amount;
}
document.addEventListener("DOMContentLoaded", function() {
    var rangeInput = document.getElementById("range");
    var selectedPrice = document.getElementById("selected-price");
    var container1 = document.querySelector(".container1");
    var container2 = document.querySelector(".container2");
    var container3 = document.querySelector(".container3");

    rangeInput.addEventListener("input", function() {
        var price = parseInt(this.value);
        selectedPrice.textContent = "Selected Price: INR " + price; 
        
        if(price >=1000){
            container1.classList.remove("hovered");
            container2.classList.remove("hovered");
            container3.classList.add("hovered");
        }
        else if(price >=500){
            container1.classList.remove("hovered");
            container2.classList.add("hovered");
            container3.classList.remove("hovered");
        }
        else if (price>=200){
            container1.classList.add("hovered");
            container2.classList.remove("hovered");
            container3.classList.remove("hovered");
        }
        else{
            container1.classList.remove("hovered");
            container2.classList.remove("hovered");
            container3.classList.remove("hovered");
            selectedPrice.textContent = " No plans available at this " + price; 
        }
    });
});
function currency(){
    var sel=document.getElementById("currency").value;
    var p1=document.querySelector(".price1");
    var p2=document.querySelector(".price2");
    var p3= document.querySelector(".price3");
    if(sel=="USD"){
        p1.textContent="2$ per month";
        p2.textContent="4$ per month";
        p3.textContent="8$ per month";
    }
    else if(sel=="EURO"){
        p1.textContent = "\u20AC2 per month";
        p2.textContent = "\u20AC4.5 per month";
        p3.textContent = "\u20AC9 per month";
    }
    else{
        p1.textContent="INR 199 per month";
        p2.textContent="INR 499 per month";
        p3.textContent="INR 999 per month";
    }
}

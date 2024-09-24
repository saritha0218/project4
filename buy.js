var a= JSON.parse(window.localStorage.getItem("item"));

    let buys = JSON.parse(localStorage.getItem("buys"));

    let totalcost = 0;
    let total;
    count = 1;

    if(!Array.isArray(buys) || buys.length === 0){
        var empty = document.createElement("h1");
        empty.textContent="Add Items !!!"
        empty.style.color="black"
        empty.style.fontSize="50px";
        empty.style.textAlign="center";
        empty.style.paddingTop="15%";
        document.body.append(empty);
    }
    else{   
    buys.forEach((a, index) => {
    var div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "center";
    div1.style.alignItems = "center";

     var x = document.createElement("img");
     x.setAttribute ("src", a.image);
     div1.appendChild(x)

    var div2 = document.createElement("div");

    var y = document.createElement("p");
     y.textContent = a.title;

     var price = document.createElement("p");
     price.textContent = a.price + "/-";

   
     var remove = document.createElement("button");
     remove.textContent = "remove";
     remove.style.width="150px";
     remove.style.height="30px";
     remove.style.backgroundColor="black";
     remove.style.color="white";
     remove.style.fontWeight="bold";
     remove.style.borderRadius="8px";
     remove.addEventListener("click", ()=>{
        buys.splice(index, 1);
            localStorage.setItem("buys", JSON.stringify(buys));
           div.remove();
           updateTotal();
     });

     let div3 = document.createElement("div");
     div3.style.marginTop="20px";

     let button1 = document.createElement("button");
     button1.textContent='-';
     button1.classList.add("but");
     button1.onclick = function() {
        if(count>1){
            count -= 1;
            button2.innerHTML = count;
            updateTotal()
        }
    };
     let button2 = document.createElement("button");
     button2.classList.add("but");
     button2.classList.add("buttt");
     button2.textContent='1';

     let button3 = document.createElement("button");
     button3.classList.add("but");
     button3.textContent='+';
     button3.onclick = function() {
        count += 1;
        button2.innerHTML = count;
        updateTotal()
    };
     div3.append(button1,button2,button3);

     div2.append(y,price,remove,div3)
     div2.style.margin="40px 100px"

    var div = document.createElement("div");
    div.append(div1,div2)
    div.style.display="flex";
    div.style.borderBottom="5px solid black";

     document.body.append(div);
    });

    var footer = document.createElement("footer");
        footer.style.position = "fixed";
        footer.style.bottom = "0";
        footer.style.left = "0";
        footer.style.width = "100%"; 
        footer.style.backgroundColor="rgb(500, 160, 160)"; 
        footer.style.textAlign = "center";
    
    total = document.createElement("h3");
    footer.append(total);

    updateTotal();

     var checkout = document.createElement("button");
     checkout.textContent = "Checkout Out";
     checkout.style.width="150px";
     checkout.style.height="30px";
     checkout.style.backgroundColor="black";
     checkout.style.color="white";
     checkout.style.marginBottom="20px";
     checkout.style.fontWeight="bold";
     checkout.style.borderRadius="8px";
     checkout.addEventListener("click", ()=>{
       localStorage.setItem("buys", JSON.stringify(buys));
        window.location.href="./checkout.html";
     });
     footer.append(checkout);

     document.body.append(footer);
}

function updateTotal() {
        totalcost = 0; 
        buys.forEach((a, index) => {
            let fprice = parseFloat(a.price);
            let itemcount = parseInt(document.querySelectorAll(".buttt")[index].textContent)
            totalcost +=fprice * itemcount;

        });
        total.textContent = `Total:  ${totalcost.toFixed(2)}/-`;
    }
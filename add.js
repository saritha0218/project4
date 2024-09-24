var a= JSON.parse(window.localStorage.getItem("item"));

        function buynow (currentObject){
            window.localStorage.setItem("item", JSON.stringify(currentObject));
        }
    
    let buys = JSON.parse(localStorage.getItem("buys")) || [];
        
        if (!Array.isArray(buys)) {
              buys = []; 
        }

    let products = JSON.parse(localStorage.getItem("products"));
    
    if(!Array.isArray(buys) || products.length === 0){
        var empty = document.createElement("h1");
        empty.textContent="Cart is Empty!!!"
        empty.style.color="black"
        empty.style.fontSize="50px";
        empty.style.textAlign="center";
        empty.style.paddingTop="15%";
        document.body.append(empty);
    }
    else{
    products.forEach((a, index) => {
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

     var des = document.createElement("p");
     des.textContent = a.description;

     var cat = document.createElement("p");
     cat.textContent = a.category;

     var div3 = document.createElement("div")
     div3.style.display="flex"; 
     div3.style.gap = "50px";
     div3.style.marginTop="50px";

     var buy = document.createElement("button");
     buy.textContent = "Buy Now";
     buy.style.width="150px";
     buy.style.height="50px";
     buy.style.backgroundColor="black";
     buy.style.color="white";
     buy.style.fontWeight="bold";
     buy.style.borderRadius="8px";
     buy.addEventListener("click", ()=>{
        buys.push(a);
       localStorage.setItem("buys", JSON.stringify(buys));
        window.location.href="./buy.html";
     })

     var remove = document.createElement("button");
     remove.textContent = "remove";
     remove.style.width="150px";
     remove.style.height="50px";
     remove.style.backgroundColor="black";
     remove.style.color="white";
     remove.style.fontWeight="bold";
     remove.style.borderRadius="8px";
     remove.addEventListener("click", ()=>{
        products.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(products));
           div.remove();
     })
     
     div3.append(buy,remove)
     div2.append(y,price,des,cat,div3)
     div2.style.margin="40px 100px"

    var div = document.createElement("div");
    div.append(div1,div2)
    div.style.display="flex";
    div.style.borderBottom="5px solid black"

     document.body.append(div);
    });
}
var a= JSON.parse(window.localStorage.getItem("item"));

    let products = JSON.parse(localStorage.getItem("products")) || [];
        
        if (!Array.isArray(products)) {
              products = []; 
        }

    let buys = JSON.parse(localStorage.getItem("buys")) || [];
        
        if (!Array.isArray(buys)) {
              buys = []; 
        }

    var div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "center";
    div1.style.alignItems = "center";

     var x = document.createElement("img");
     x.setAttribute ("src", a.image);
     div1.appendChild(x)

    var images = document.createElement("div");
    images.style.paddingRight="50px";

    var img1 = document.createElement("img");
    img1.style.border="2px solid gray";
    img1.style.borderRadius="8px"
    img1.style.padding="10px";
    img1.style.width="150px";
    img1.style.height="150px";
    let src1 = img1.setAttribute("src",a.img1)
    img1.addEventListener("click", ()=>{
        x.setAttribute("src", a.img1)
    } );

    var img2 = document.createElement("img");
    img2.style.border="2px solid gray";
    img2.style.borderRadius="8px"
    img2.style.padding="10px";
    img2.style.width="150px";
    img2.style.height="150px";
    let src2 = img2.setAttribute("src", a.img2)
    img2.addEventListener("click", ()=>{
        x.setAttribute("src", a.img2)
    } );
    
    var img3 = document.createElement("img");
    img3.style.border="2px solid gray";
    img3.style.borderRadius="8px"
    img3.style.padding="10px";
    img3.style.width="150px";
    img3.style.height="150px";
    let src3 = img3.setAttribute("src",a.img3)
    img3.addEventListener("click", ()=>{
        x.setAttribute("src", a.img3)
    } );
    
    images.append(img1,img2,img3)

    var div2 = document.createElement("div");

    var y = document.createElement("p");
     y.textContent = a.title;

     var br1 = document.createElement("br");

     var price = document.createElement("p");
     price.textContent = a.price + "/-";
     
     var br2 = document.createElement("br");

     var des = document.createElement("p");
     des.textContent = a.description;

     var br3 = document.createElement("br");

     var cat = document.createElement("p");
     cat.textContent = a.category;

     var div3 = document.createElement("div")
     div3.style.display="flex"; 
     div3.style.gap = "50px";
     div3.style.marginTop="50px";

     var add = document.createElement("button");
     add.textContent =" Add to Cart";
     add.style.width="150px";
     add.style.backgroundColor="rgb(244, 67, 67)";
     add.style.color="white";
     add.style.fontWeight="bold";
     add.style.borderRadius="8px";
     add.addEventListener("click", ()=>{
       add.textContent =" Added";
       products.push(a);
       localStorage.setItem("products", JSON.stringify(products));
       window.location.href="./add.html";
     })

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
     
     div3.append(add, buy)
     div2.append(y,br1,price,br2,des,br3,cat,div3)
     div2.style.margin="40px 100px"

    var div = document.createElement("div");
    div.append(images,div1,div2)
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";


     
     document.body.append(div);
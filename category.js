var a= JSON.parse(window.localStorage.getItem("items"));

        function buttonHandler (currentObject){
            window.localStorage.setItem("item", JSON.stringify(currentObject));
        }

        for(let i of a){
          let divs = document.createElement("div")
          divs.style.width="298px";
          divs.style.height="400px";
          divs.style.margin="15px 22px";
          divs.style.padding="15px";
          divs.style.overflow="scroll";
          divs.style.scrollbarWidth="none"
          divs.style.border="2px solid black";
          divs.style.borderRadius="20px"
          divs.style.display = 'flex';
          divs.style.flexDirection="column";
          divs.style.alignItems = 'center'; 
          divs.style.backgroundColor="white";
          
          var div1 = document.createElement("div") 
          div1.style.height="200px"         
          var img = document.createElement("img");
          img.style.width= "150px";
          img.style.height="180px";
          img.style.mixBlendMode="multiply";
          img.setAttribute("src", i["image"]);
          div1.appendChild(img);

          var div2 =  document.createElement("div")
          div2.style.textAlign="center"
          div2.style.position = "relative";
          div2.style.height = "auto";
          div2.classList.add('div-hover');
          var br = document.createElement("br");
          div2.appendChild(br);

          var title = document.createElement("h4");
          title.innerHTML=i["title"];
          div2.appendChild(title);

          var amount = document.createElement("p");
          amount.innerHTML=i["price"] + "/-";
          div2.appendChild(amount);

          var description = document.createElement("p");
          description.innerHTML=i["description"];
          div2.appendChild(description);

          var rating = document.createElement("div");

          var rate = document.createElement("p");
          rate.innerHTML=`Rating: `+ i["rating"]["rate"];
          rating.appendChild(rate);

          var count = document.createElement("p");
          count.innerHTML=`Count: `+i["rating"]["count"];
          rating.appendChild(count);

          div2.appendChild(rating);

          var category = document.createElement("p");
          category.innerHTML=i["category"];
          div2.appendChild(category);

          divs.append(div1,div2)

          var anchor = document.createElement("a");
          anchor.href="./see.html";
          anchor.addEventListener("click",()=> buttonHandler(i))
          anchor.style.textDecoration= "none";
          anchor.style.color = "black";
          anchor.style.fontWeight = "bold";
          anchor.append(divs);

          document.body.appendChild(anchor);
          
      } 

      document.body.style.display="flex";
      document.body.style.flexWrap="wrap";
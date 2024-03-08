const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

if(!localStorage.getItem("theme")){
  localStorage.setItem("theme","nuit")
}else{
  if(localStorage.getItem("theme") === "light"){
      document.body.classList.add("nuit");
  }else{
      localStorage.setItem("theme","nuit")
  }
}

try{
  document.getElementById("themebutton").addEventListener("click", (e) => {
      if(localStorage.getItem("theme") === "nuit"){

          localStorage.setItem("theme","light")
          document.body.classList.add("nuit");

      }else{

          localStorage.setItem("theme","nuit")
          document.body.classList.remove("nuit");

      }
  });
}catch(error){};


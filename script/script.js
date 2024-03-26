const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleScrollLock();
});

retour.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleScrollLock();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggleScrollLock();
  });
});

function toggleScrollLock() {
  document.body.classList.toggle("scroll-lock");
}


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

// -----------------------------------------------TRAILER

lancervideo.addEventListener("click", () => {
  trailer.classList.toggle("active");
  toggleScrollLock();
});

fermervideo.addEventListener("click", () => {
  trailer.classList.toggle("active");
  toggleScrollLock();
});

// Pour les langues 

const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        if (lang === 'en') {
          // nav
            document.querySelector('#decouvrir').innerText = 'Discover';
            document.querySelector('#billet').innerText = 'Tickets';
            document.querySelector('#experimenter').innerText = 'Experience';
            document.querySelector('#nav ul li:last-child a').href = '?lang=fr';
            document.querySelector('#nav ul li:last-child a').innerText = 'Fr';

        //site accueil
        document.querySelector('#AccContent #lancervideo').innerText = 'Watch trailer';
        document.querySelector(".dessert h1").innerText='Beyond the icon'

        }

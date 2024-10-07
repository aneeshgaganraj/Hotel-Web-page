let navbar = document.querySelector(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.foreach(function(a){
    a.addventListener("click", function(){
        navcollapse.classList.remove("show")
    })
})  
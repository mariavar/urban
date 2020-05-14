const app = {
    init: function() {
        app.pages = document.querySelectorAll('.page');

        document.querySelectorAll('.menubtn').forEach((link)=>{
            link.addEventListener('click', app.nav);
        });
        document.querySelectorAll('.dashboardbtn').forEach((link)=>{
            link.addEventListener('click', app.dashnav);
        });

        history.replaceState({}, 'Dashboard', '#dashboard');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
       // document.getElementById(currentPage).dispatchEvent(app.show);
    },
    dashnav: function(ev){
        ev.preventDefault();
        let dashboardPage = ev.target.getAttribute('data-target');
        let x = document.querySelectorAll('.showing');
        let y = document.querySelectorAll("."+dashboardPage);
        for (i=0; i < x.length; i++) {
            x[i].classList.remove('showing');
        };
        for (j=0; j <= y.length; j++) {
            y[j].classList.add('showing');
        };        
    },    
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        //document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);

function changeColorPlantBtn() {
    let grafBtn = document.getElementById("grafer-btn");
    let planterBtn = document.getElementById("planter-btn");
    if (grafBtn.classList.contains("btn-primary")) {
        grafBtn.classList.remove("btn-primary");
        grafBtn.classList.add("btn-secondary");
        planterBtn.classList.remove("btn-secondary");
        planterBtn.classList.add("btn-primary");
    }
}
function changeColorGraphBtn() {
    let grafBtn = document.getElementById("grafer-btn");
    let planterBtn = document.getElementById("planter-btn");
    if (planterBtn.classList.contains("btn-primary")) {
        planterBtn.classList.remove("btn-primary");
        planterBtn.classList.add("btn-secondary");
        grafBtn.classList.remove("btn-secondary");
        grafBtn.classList.add("btn-primary");
    }
}

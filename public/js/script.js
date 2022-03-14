let scroll = new SmoothScroll('a[href^="#"]');

window.addEventListener('DOMContentLoaded', function(){

    window.onscroll = ()=>{
        Fuwa();
    };

    MenuBtn();
    Fuwa();

});

const MenuBtn = () =>{
    let menuBtn = document.getElementById('menubtn');
    let nav = document.getElementById('nav');
    menuBtn.onclick = () =>{
        menuBtn.classList.toggle('open');
        nav.classList.toggle('open');
    };
    let navItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
        const navItem = navItems[i];
        navItem.onclick = () =>{
            menuBtn.classList.remove('open');
            nav.classList.remove('open');
        };
    }
};

const Fuwa = ()=>{
    let elements = document.getElementsByClassName('fadeUpTrigger');
    for (let i = 0; i < elements.length; i++) {
        let targetElement = elements[i];
        let bottom = document.documentElement.clientHeight;
        let top = targetElement.getBoundingClientRect().top;
        if( top < bottom )
        {
            targetElement.classList.add("fadeUp");// 可視範囲に入ったときの処理
        } else {
            targetElement.classList.remove("fadeUp");
        }
      }
};
  
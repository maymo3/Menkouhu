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
};

const Fuwa = ()=>{
    let elements = document.getElementsByClassName('fadeUpTrigger');
    for (let i = 0; i < elements.length; i++) {
        let targetElement = elements[i];
        let bottom = document.documentElement.clientHeight
        let top = targetElement.getBoundingClientRect().top;
        console.log(`Bottom:${bottom}`);
        console.log(`Top:${top}`)
        if( top < bottom )
        {
            targetElement.classList.add("fadeUp");// 可視範囲に入ったときの処理
        } else {
            targetElement.classList.remove("fadeUp");
        }
      }
};
  
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>
{
    menuIcon.classList.toggle('fa-x');
    //<i class="fa-solid fa-x"></i>
    navbar.classList.toggle('active')
}


let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');
          if(top>=offset && top <offset +height){
            navLinks.forEach.apply(links=>{
              links.classList.remove('.active');
              document.querySelector('header nav a[href* ='+id+']').classList.add('active');
          });
          };
    }

    );


    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    /*                        remove toggler icon and nav   */

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};
// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.removeClass("is-open");
// }
    // <script type="text/javascript">
    //   $(
    //     '.mobile-menu__naviation .mobile-menu__list .mobile-menu__item .mobile-menu__link'
    //   ).click(function () {
    //     $('.mobile-menu.js-menu-container.is-open').removeClass('is-open');
    //   });
    // </script>

//     let List = document.querySelectorAll('.mobile-menu__naviation li a')
//  List.forEach(item =>{
//         item.addEventListener('click', (e) =>{
//             item.classList.toggle('is-open');
//         })
//     }) добавление класа

const list = document.querySelectorAll('.mobile-menu__naviation li a')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{  elem = document.getElementById("myDIV");
        element.classList.removeClass("is-open");
     });
     })
})

    
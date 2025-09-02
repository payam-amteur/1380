const my_toggle = document.querySelector(".my-toggle");
const my_back = document.querySelector('.my-back');
const my_bright = document.querySelector('.my-bright');
const my_circul = document.querySelectorAll('.my-circul');
function Day_Night(){
            my_toggle.classList.toggle('active1');
            my_back.classList.toggle('active2');
            my_bright.classList.toggle('active3');

            my_circul.forEach(mc => {
               mc.classList.toggle('active4');   
            })
            
}
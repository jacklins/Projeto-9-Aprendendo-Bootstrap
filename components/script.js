

$(document).ready(function(){
let containerA = document.getElementById('circleA')


let circleA = new ProgressBar.Circle(containerA, {

    color: '#65DAF9', // objeto com as caracteristicas do círculo
    strokeWidth: 8,
    duration: 2400,
    from: { color: '#AAA'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 245);

        circle.setText(value);
    }
})



// Start moment 

let dataAreaOffset = $('#data-area').offset();
let stop = 0

$(window).scroll(function(e){

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 300) && stop == 0 ) {



circleA.animate(1.0);

stop = 1;

    }
});

// Parallax
setTimeout(function(){
$('#data-area').parallax({imageSrc: 'components/img/parallax.jpg'})
}, 250);

});
var context={blockName: "pie de pagina"};
var block=document.querySelector(".block");

block.innerHTML=PriceApp.block(context);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });


  var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
     start: [20, 80],
     connect: true,
     step: 1,
     orientation: 'horizontal', // 'horizontal' or 'vertical'
     range: {
       'min': 0,
       'max': 100
     },
     format: wNumb({
       decimals: 0
     })
    });

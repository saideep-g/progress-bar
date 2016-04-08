$(function(){
  var i =1;
  // Assign a variable to a jQuery element object
  var $pb_1 = $('#pb-1');
  var $pb_2 = $('#pb-2');
  var $pb_3 = $('#pb-3');
  var $pbc_1 = $('#pb-circle-1');
  var $pbc_2 = $('#pb-circle-2');
  var $pbc_3 = $('#pb-circle-3');
  var $pbc_4 = $('#pb-circle-4');
  // Animate the element using Velocity
  //$pb_1.velocity({ opacity: 1,width: '75px' }, { duration: 'slow', easing:'spring' });
  $pbc_1.velocity({ opacity: 1 }, { duration: 'slow', easing:'spring' });

$('#submit').click(function(){
  if (i ==3){
    $pb_3.velocity({ opacity: 1,width: '75px' }, { duration: 'slow', easing: 'spring', delay: '400' });
    $pbc_4.velocity({ opacity: 1 }, { duration: 'slow', easing:'spring' });
    i = i+1;
  };
  if (i ==2){
    $pb_2.velocity({ opacity: 1,width: '75px' }, { duration: 'slow', easing: 'spring', delay: '400' });
    $pbc_3.velocity({ opacity: 1 }, { duration: 'slow', easing:'spring' });
    i = i+1;
  };
  if (i ==1){
    $pb_1.velocity({ opacity: 1,width: '75px' }, { duration: 500, easing: 'spring' , delay: '400'});
    $pbc_2.velocity({ opacity: 1 }, { duration: 'slow', easing:'spring' });
    i = i+1;
  };

})


});

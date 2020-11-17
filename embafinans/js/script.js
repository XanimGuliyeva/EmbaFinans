$(document).ready(function () {
  $("#demo").click(function () {
    $("#demo1").animate({
      top: "350px",
      left: "50px",
      width: "1020px",
      "z-index": "1"
    });
    $("#demo").animate({
      left: "-50px",
      top: "50px",
      "z-index": "10",
      width: "1070px"
    });
    $("#demo1").animate({
      top: "0px",
      left: "0px",
      width: "1070px",
    });
    $(".text2").animate({
      right: "160px",
      top: "-2px",
    });
      $('.text2').animate({
        'right': '160px',
        'top': '-2px',
        });
    $('.Kampaniyalar').css({
    'left': '70px',
    'width': '200px',
    'height': '55px',
    'margin': '0 0 0 21px',
    'object-fit': 'contain',
    'font-family': 'MarkPro',
    'font-size': '43px',
    'font-weight': '900',
    'font-stretch': 'normal',
    'font-style': 'normal',
    'line-height': 'normal',
    'letter-spacing': '-0.19px',
    'color': 'var(--white)',
});
$('.Mhsullar').css({
    'left': '15px',
    'width': '191px',
    'height': '35px',
    'margin': '0 0 0 27px',
    'object-fit': 'contain',
    'font-family': 'MarkPro',
    'font-size': '28px',
    'font-weight': '500',
    'font-stretch': 'normal',
    'font-style':' normal',
    'line-height': 'normal',
    'letter-spacing': '-0.12px',
    'color': 'rgba(255, 255, 255, 0.33)',
});
$('.Oval1').css({
'font-size': '10px',
'border-radius': '50%',
'left': '70px',
'top': '30px',
}); 
$('.Oval2').css({
'font-size': '6px',
'border-radius': '50%',
'left': '22px',
'top': '25px',
});
$('.bfilter-text text2').css({
'padding': '1px 10px 5px 10px',
'margin-bottom': '10px',
'left': '-100px',
});
  });

  $("#demo1").click(function () {
    $("#demo").animate({
      top: "350px",
      left: "0px",
      width: "1070px",
      "z-index": "1"
    });
    $("#demo1").animate({
      left: "-50px",
      top: "50px",
      "z-index": "10",
      width: "1070",
    });
    $("#demo").animate({
      top: "0px",
    });
    $('.Mhsullar').css({
      'width': '200px',
      'height': '55px',
      'margin': '0 0 0 21px',
      'left':'70px',
      'object-fit': 'contain',
      'font-family': 'MarkPro',
      'font-size': '43px',
      'font-weight': '900',
      'font-stretch': 'normal',
      'font-style': 'normal',
      'line-height': 'normal',
      'letter-spacing': '-0.19px',
      'color': 'var(--white)',
  });
  $('.Kampaniyalar').css({
      'width': '191px',
      'height': '35px',
      'margin': '0 0 0 27px',
      'left':'15px',
      'object-fit': 'contain',
      'font-family': 'MarkPro',
      'font-size': '28px',
      'font-weight': '500',
      'font-stretch': 'normal',
      'font-style':' normal',
      'line-height': 'normal',
      'letter-spacing': '-0.12px',
      'color': 'rgba(255, 255, 255, 0.33)',
  });
  $('.Oval2').css({
    'font-size': '10px',
    'border-radius': '50%',
    'left': '70px',
    'top': '30px',
});  
$('.Oval1').css({
  'font-size': '6px',
  'border-radius': '50%',
  'left': '22px',
  'top': '25px',
});
$('.text1').animate({
  'right': '210px',
  'top': '10px',
  });
  });
});


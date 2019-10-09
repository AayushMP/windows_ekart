$(document).ready(function() {
  var ixone = 0;
  var ixtwo = 0;
  var ixthree = 0;
  var ixfour = 0;
  var ixfive = 0;
  var ixsix = 0;
  var total = $('.balance').val();
  $('.pone, .ptwo, .pthree, .pfour, .pfive, .psix').on('click', function(e) {
  var el = $(e.currentTarget);
  var action = el.attr('class');
    switch (action) {
      case 'pone':
      if (ixone < 5) {
        ixone++;
        $('.qone').val(ixone);
        console.log($('.qone').val());
        total = total - $('.costo').val();
        $('.balance').val(total);
      }
      break;
      case 'ptwo':
      if (ixtwo < 5) {
        ixtwo++;
        $('.qtwo').val(ixtwo);
        console.log($('.qtwo').val());
        total = total - $('.costt').val();
        $('.balance').val(total);
      }
      break;
      case 'pthree':
      if (ixthree < 5) {
        ixthree++;
        $('.qthree').val(ixthree);
        console.log($('.qthree').val());
        total = total - $('.costh').val();
        $('.balance').val(total);
      }
      break;
      case 'pfour':
      if (ixfour < 5) {
        ixfour++;
        $('.qfour').val(ixfour);
        console.log($('.qfour').val());
        total = total - $('.costf').val();
        $('.balance').val(total);
      }
      break;
      case 'pfive':
      if (ixfive < 5) {
        ixfive++;
        $('.qfive').val(ixfive);
        console.log($('.qfive').val());
        total = total - $('.costv').val();
        $('.balance').val(total);
      }
      break;
      case 'psix':
      if (ixsix < 5) {
        ixsix++;
        $('.qsix').val(ixsix);
        console.log($('.qsix').val());
        total = total - $('.costs').val();
        $('.balance').val(total);
      }
      break;
    }
  });
  $('.mone, .mtwo, .mthree, .mfour, .mfive, .msix').on('click', function(f) {
  var fl = $(f.currentTarget);
  var action = fl.attr('class');
    switch (action) {
      case 'mone':
      if (ixone > 0) {
        ixone--;
        $('.qone').val(ixone);
        console.log($('.qone').val());
        total = total + parseInt($('.costo').val());
        $('.balance').val(total);
      }
      break;
      case 'mtwo':
      if (ixtwo > 0) {
        ixtwo--;
        $('.qtwo').val(ixtwo);
        console.log($('.qtwo').val());
        total = total + parseInt($('.costt').val());
        $('.balance').val(total);
      }
      break;
      case 'mthree':
      if (ixthree > 0) {
        ixthree--;
        $('.qthree').val(ixthree);
        console.log($('.qthree').val());
        total = total + parseInt($('.costh').val());
        $('.balance').val(total);
      }
      break;
      case 'mfour':
      if (ixfour > 0) {
        ixfour--;
        $('.qfour').val(ixfour);
        console.log($('.qfour').val());
        total = total + parseInt($('.costf').val());
        $('.balance').val(total);
      }
      break;
      case 'mfive':
      if (ixfive > 0) {
        ixfive--;
        $('.qfive').val(ixfive);
        console.log($('.qfive').val());
        total = total + parseInt($('.costv').val());
        $('.balance').val(total);
      }
      break;
      case 'msix':
      if (ixsix > 0) {
        ixsix--;
        $('.qsix').val(ixsix);
        console.log($('.qsix').val());
        total = total + parseInt($('.costs').val());
        $('.balance').val(total);
      }
      break;
    }
  });
});

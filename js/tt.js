(function () {
  var tt = document.getElementById('tt');
  var num = 0;

  tt.addEventListener('touchend', function () {
    num++;

    if (num % 2 == 0) {
      tt.classList.remove('active');
    } else {
      tt.classList.add('active');
    }
  });
})();

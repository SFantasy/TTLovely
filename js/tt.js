(function () {
  var tt = document.getElementById('tt');
  var num = 0;

  tt.onclick = function () {
    num++;

    if (num % 2 == 0) {
      tt.classList.remove('active');
    } else {
      tt.classList.add('active');
    }
  };
})();

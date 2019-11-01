count = 0;
document.getElementById('catImage').addEventListener('click', event => {
  count++;
  document.getElementById('count').innerText = count;
});

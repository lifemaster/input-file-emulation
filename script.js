const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
  const fileInput = document.createElement('input');
  fileInput.setAttribute('type', 'file');

  fileInput.onchange = function(e) {
    console.log(e.target.files[0]);
  };

  const mouseEvent = new MouseEvent('click');
  fileInput.dispatchEvent(mouseEvent);
});
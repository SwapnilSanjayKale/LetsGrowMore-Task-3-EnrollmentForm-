var Name = document.getElementById('name')
var email = document.getElementById('email')
var website = document.getElementById('website')
var btn = document.getElementById('btnsubmit');
var cards = document.querySelector('.cards');
var Male = document.getElementById('Male')
var Female = document.getElementById('Female')
var HTML = document.getElementById('HTML')
var CSS = document.getElementById('CSS')
var JavaScript = document.getElementById('JavaScript')
var form = document.querySelector('form');
var selectImage;

var image = function (event) {
  selectImage = URL.createObjectURL(event.target.files[0]);
};
btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Name.value || !email.value || !website.value) {
    alert('ERROR: Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <div class="card-body">
  <h4 class="title">${Name.value}</h4>
  <p class="text">${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
  <p class="text">${email.value}</p>
  <p class="text">${website.value}</p>
  <p class="text">${values}</p>
  </div>
  <div class="image">
      <img src='${selectImage}' alt="Image">
    </div>
  </div>`

    alert('Wohoo!!  Student Enrolled Successfully!!!!')
    // form.reset()
  }
});
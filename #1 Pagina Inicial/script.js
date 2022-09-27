var options = {
    strings: ['-', 'Mini', 'Estação',  'Meteorológica'],
    typeSpeed: 100,
    backSpeed:100,
    loop: true
  };
var typed = new Typed('.typing', options);

const btn = document.querySelector('#refresh')

btn.addEventListener('click', () => {
    location.reload()
})
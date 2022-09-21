
const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container');

// Rotation du cube avec la souris
container.addEventListener('mousemove', (e) => {

  rotY = e.clientX / 1.8;
  rotZ = e.clientY / 1.8;

  cube.style.animation = 'none';
  cube.style.transform = 'rotateY(' + rotY + 'deg) rotateZ(' + rotZ + 'deg)';
  cube.style.transition = '500ms ease-out';

  container.addEventListener('mouseleave', () => {
    cube.style.animation = 'spin 1500s infinite linear';
  });
});


// Rotation du cube avec les flèches
document.body.addEventListener('click', function(e) {

  cube.style.animation = 'none';
  cube.style.transition = '1.2s ease';

  //Choisir une face au hasard
  const classes = ['front','back','top','bottom','right','left'];
  classToUse = classes[Math.floor(Math.random() * classes.length)];

  //Etre sur d'avoir une autre classe
  if (cube.classList.contains(classToUse)) {
    classToUse = classes[Math.floor(Math.random() * classes.length)];
  }; 
  
  //Afficher une face au hasard
  if (e.target.classList.contains('arrow')) {
    cube.classList.remove('front','back','top','bottom','right','left');
    cube.classList.add(classToUse);
    };
});

// Redémarrer l'animation quand on sors des flèches
document.querySelectorAll('.arrow').forEach(item => {
  item.addEventListener('mouseleave', () => {
    cube.style.animation = 'spin 1500s infinite linear';
    cube.classList.remove('front','back','top','bottom','right','left');
  });
});
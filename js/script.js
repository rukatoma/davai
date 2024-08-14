circle = document.getElementById('circle');
circleDodge = document.getElementById('circle-dodge');
circleFrame = document.getElementById('scroll-frame');
writeMachine = document.getElementById('write-machine');

a = window.innerHeight / 1.6;

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    circleDodge.style.transform = 'translate(-' + x * 200 + 'px, -' + y * 200 + 'px) rotate(-165deg)';
});

window.addEventListener('scroll', function() {
  if (pageYOffset > 100) {
    circleFrame.style.zIndex = "100";
  } else {
    circleFrame.style.zIndex = "-1";
  }
  if (pageYOffset < 540) {
    circle.style.width = pageYOffset * 1.3 + a + 'px' ;
    circle.style.height = pageYOffset * 1.3 + a + 'px';
    circle.style.top = 220 + pageYOffset * -0.5 + 'px';
    circle.style.left = 320 + pageYOffset * 0.2 + 'px';
  }
  if (pageYOffset > 540) {
    circle.style.width = pageYOffset * 1.3 + a + 'px' ;
    circle.style.height = pageYOffset * 1.3 + a + 'px';
    circle.style.top = 220 + pageYOffset * -0.5 + 'px';
    circle.style.left = 690 - pageYOffset * 0.5 + 'px';
  }
  // if(circle.style.width > '85vw') {
  //   b = circle.style.top;
  //   c = circle.style.left;

  // }
});

let typed = new Typed('#typed', { 
  stringsElement: '#typed-strings',
  typeSpeed: 100,
  startDelay: 200,
  backSpeed: 50, 
  loop: true,
  showCursor: false
});
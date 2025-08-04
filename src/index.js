import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { animate, stagger, text, createScope } from 'animejs';

new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: { el: '.swiper-pagination' },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: { el: '.swiper-scrollbar' },
});




const { chars } = text.split('.movie-title', { words: false, chars: true });
animate(chars, {
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  rotate: { from: '-1turn', delay: 0 },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true,
});






createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, reduceMotion } = self.matches;
  
  if (isSmall) {
    utils.set('.derorian', { scale: .5 });
  }
    
  function runAnimation() {
  animate('.delorean', {
    x: ['100vw', '0vw'],
    duration: 1250
  });
}

// 画像クリックで実行
document.querySelector('.delorean').addEventListener('click', runAnimation);

});

const posterEl = document.querySelector('.poster');
let isZoomed = false;

posterEl.addEventListener('click', () => {
  animate(posterEl, {
    scale: isZoomed ? 1 : 1.8,
    duration: 500,
    easing: 'easeInOutQuad'
  });
  isZoomed = !isZoomed;
});
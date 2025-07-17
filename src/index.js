// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });




const swiper = new Swiper('.swiper-1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // スクロールバーを不要にする
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar-1',
  // },
});

let titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')

let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement);

swiper.on('slideChange', function(){
  console.log('slide changed');

  console.log(swiper.realIndex);

  titleElement.remove();

  titleElement = document.createTextNode('スライド' + swiper.realIndex + 'を表示しています。')
  titleContainer.appendChild(titleElement);
});


const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titles = [
  "ルフィのイラスト",
  "ゾロのイラスト",
  "ナミのイラスト",
  "サンジのイラスト",
];

let titleElement2 = document.createTextNode(titles[swiper2.realIndex])

let titleContainer2 = document.getElementById('swiper-title-2');
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function(){
  titleElement2.remove();
  titleElement2 = document.createTextNode(titles[swiper2.realIndex])
  titleContainer2.appendChild(titleElement2);
});





import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])

  .addField('#basic_address', [
    {
    rule: 'required',
    errorMessage: '必須入力項目です。',
    }
]);

validator.onSuccess((event) => {
	event.preventDefault();
  
	const form = event.target;
	const formData = new FormData(form);
  
	console.log('名前:', formData.get('basic_name'));
	console.log('メールアドレス:', formData.get('basic_email'));
	console.log('パスワード:', formData.get('basic_password'));
	console.log('年齢:', formData.get('basic_age'));
	console.log('住所:', formData.get('basic_address'));
  });
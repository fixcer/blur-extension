const BLUR = 'blur(20px)';
const NON_BLUR = 'blur(0px)';

const body = document.getElementsByTagName('body')[0];

const getCSS = (blur) => {
  return `-webkit-filter: ${blur}; -moz-filter: ${blur}; -o-filter: ${blur}; -ms-filter: ${blur}; filter: ${blur};`;
};

window.addEventListener(
  'focus',
  (event) => {
    body.style = getCSS(NON_BLUR);
  },
  false
);

window.addEventListener(
  'blur',
  (event) => {
    body.style = getCSS(BLUR);
  },
  false
);

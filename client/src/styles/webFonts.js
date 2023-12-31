import WebFont from 'webfontloader';

const families = [
  'Roboto:400,500,600,700',
  'Montserrat:400,500,600,700,900',
  'Averia Sans Libre:700',
];

export const loadWebFonts = () => WebFont.load({ google: { families } });

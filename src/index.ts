import jss from './core/jss';
import css from './core/css';
import sheet from './core/sheet';
import alias from './core/alias';
import variables from './core/variables';
import create from './core/create';
import normalize from './core/normalize';
import polyfill from './core/polyfill';

const cometta = {
  alias,
  jss,
  css,
  create,
  sheet,
  variables,
  normalize,
  polyfill,
};

cometta.polyfill({
  units: {
    rem: 16,
  },
});

console.log(
  cometta.jss({
    width: '1rem',
  }),
);

export default cometta;

globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_stSGaXAd.mjs';
import './chunks/astro/server_x7TXGaPa.mjs';
import { s as sequence } from './chunks/index_CPCmUlCW.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };

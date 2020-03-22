import { APP_SLUG } from 'config';

export default function cache(k, v) {
  k = `${APP_SLUG}:${k}`;

  switch (arguments.length) {
    case 2:
      if (v === null) return window.localStorage.removeItem(k);
      return window.localStorage.setItem(k, JSON.stringify(v));

    case 1:
      try {
        return JSON.parse(window.localStorage.getItem(k));
      } catch (e) {
        return null;
      }

    default:
      return;
  }
}

window.cache = cache;

import {URL_BACKEND} from "./src/app/config";

const proxy = [
  {
    context: '/api',
    target: URL_BACKEND,
    secure: false,
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = proxy;

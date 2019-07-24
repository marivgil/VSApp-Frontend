import {URL_BACKEND} from "./src/app/config";

const proxy = [
  {
    context: '/api',
    target: URL_BACKEND,
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = proxy;

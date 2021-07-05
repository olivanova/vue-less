import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "./translatePlugin";

const ru = {
  app: {
    title: 'ru текст',
    btn: 'сменить язык'
  }
}

const en = {
  app: {
    title: 'en text',
    btn: 'toggle language'
  }
}

const app = createApp(App)
app.use(translatePlugin, {ru, en})
app.mount('#app')


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue
};

array1.reduce(reducer, 10);
import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios';



createApp(App).mount('#app')

const axios = require('axios').default;
axios.defaults.baseURL = process.env.VUE_APP_WORKSTATUS_URL;
console.log(axios);
console.log(axios.defaults.baseURL);

import './css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// vue组件库vant的样式文件
import 'vant/lib/index.css';
// vue组件库vant的基本依赖文件
import vant from "vant";
// 公共Header栏
import Header from './components/Header.vue';



const app = createApp(App)
// 头部
app.component('Header', Header);
app.use(router)
app.use(vant)
app.mount('#app')

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// UI框架
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// HTTP请求
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// 默认端口
// axios.defaults.baseURL = "http://localhost:4000/";
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");
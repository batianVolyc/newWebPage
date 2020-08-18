import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/iconfont.js'
import './assets/fonts/iconfont.css'
// import 'animate.css'
// import 'animate.css/animate.min.css';
// import animated from 'animate.css'
// Vue.use(animated)
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
import VueI18n from 'vue-i18n' //引入
Vue.use(VueI18n) //通过插件方式挂载
Vue.config.productionTip = false

/*---------使用语言包-----------*/
const i18n = new VueI18n({
	locale: 'zh-CN', // 语言标识
	//this.$i18n.locale // 通过切换locale的值来实现语言切换
	messages: {
		'zh-CN': require('./common/lang/zh'), // 中文语言包
		'en-US': require('./common/lang/en') // 英文语言包
	}
});

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import Test from './components/Test'

new Vue({
    el: '#app',
    template: '<div><App /> <Test /></div>',
    components: {App, Test}
})

// 让JS模块能HMR
if(module.hot) {
    module.hot.accept()
}
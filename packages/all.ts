
import {App} from 'vue'
import SwainButton from './button/index.vue'

const components=[
    SwainButton
]
const install=(app:App)=>{
    components.forEach(component=>{
        app.component(component.name,component)
    })
}
// 导出install方法
export default {
    install
  }
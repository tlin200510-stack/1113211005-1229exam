// 修正路徑拼字：style.scss
import '../scss/style.scss'
import * as bootstrap from 'bootstrap'

// 引入 AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// 初始化 AOS
AOS.init({
  duration: 1000,
  once: true, // 動畫是否只執行一次
})
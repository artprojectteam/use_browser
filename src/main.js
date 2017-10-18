import Core from './modules/Core'
import Classes from './modules/Classes'
import getIeBooleanList from './lists/ie'
import getBrowserBooleanList from './lists/browser'
import getEngineBooleanList from './lists/engine'
import getTabletBooleanList from './lists/tablet'
import getMobileBooleanList from './lists/mobile'
import getDeviceBooleanList from './lists/device'
import getOsBooleanList from './lists/os'

export default ((ua, appv)=>{
  const createClass = new Classes('no-')
  Core.initialize(ua, appv)
  
  const browser = Core.concatArr(getIeBooleanList(), getBrowserBooleanList())
  createClass.html_class = browser
  
  const engine = getEngineBooleanList()
  createClass.html_class = engine
  
  const tablet = getTabletBooleanList()
  createClass.html_class = tablet
  
  const mobile = getMobileBooleanList(tablet.android_tablet)
  createClass.html_class = mobile
  
  const device = getDeviceBooleanList(tablet, mobile)
  createClass.html_class = device
  
  const os = getOsBooleanList(tablet, mobile)
  createClass.html_class = os
  
  // add class
  const _cls = createClass.html_class.join(' ')
  const _html = document.getElementsByTagName('html')
  _html[0].className += ` ${_cls}`
  
  return {
    ua: ua,
    app_version: appv,
    browser: browser,
    engine: engine,
    tablet: tablet,
    mobile: mobile,
    device: device,
    os: os
  }
})(window.navigator.userAgent.toLowerCase(), window.navigator.appVersion.toLowerCase())

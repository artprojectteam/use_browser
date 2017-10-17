import Core from './modules/Core'
import Classes from './modules/Classes'
import getIE from './lists/ie'
import getBrowser from './lists/browser'
import getEngine from './lists/engine'
import getTablet from './lists/tablet'
import getMobile from './lists/mobile'
import getDevice from './lists/device'
import getOS from './lists/os'

export default ((ua, appv)=>{
  const createClass = new Classes('no-')
  Core.initialize(ua, appv)
  
  const browser = Core.concatArr(getIE(), getBrowser())
  createClass.html_class = browser
  
  const engine = getEngine()
  createClass.html_class = engine
  
  const tablet = getTablet()
  createClass.html_class = tablet
  
  const mobile = getMobile(tablet.android_tablet)
  createClass.html_class = mobile
  
  const device = getDevice(tablet, mobile)
  createClass.html_class = device
  
  const os = getOS(tablet, mobile)
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

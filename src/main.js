export default ((ua, appv)=>{
  return {
    a: 'a'
  }
})(window.navigator.userAgent.toLowerCase(), window.navigator.appVersion.toLowerCase())

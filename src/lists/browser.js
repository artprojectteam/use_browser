import Core from '../modules/Core'

/**
 * get browser type
 * @returns {{chrome: (*|boolean), mobile_chrome: (*|boolean), safari: (*|boolean), mobile_safari: (*|boolean), firefox: boolean, android_default: (*|boolean)}}
 */
export default ()=>{
  const is_chrome = Core.is_chrome && Core.is_safari && !Core.is_edge
  const is_safari = Core.is_safari && !Core.is_chrome && !Core.is_edge
  
  return {
    chrome: is_chrome,
    mobile_chrome: is_chrome && Core.is_mobile,
    safari: is_safari && !Core.is_mobile,
    mobile_safari: is_safari && Core.is_mobile,
    firefox: Core.isIndexSearch('firefox'),
    android_default: Core.is_android && !Core.is_chrome
  }
}
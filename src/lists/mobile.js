import Core from '../modules/Core'

/**
 * get mobile
 * @param is_android_tablet {boolean}
 * @returns {{iPhone: boolean, iPod: boolean, android: (*|boolean)}}
 */
export default (is_android_tablet)=>{
  return {
    iPhone: Core.isIndexSearch('iphone'),
    iPod: Core.isIndexSearch('ipod'),
    android: Core.is_android && Core.is_mobile && !is_android_tablet
  }
}
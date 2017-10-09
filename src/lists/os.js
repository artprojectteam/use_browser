import Core from '../modules/Core'

/**
 * get os
 * @param tablet {object}
 * @param mobile {object}
 * @returns {{windows: boolean, osx: boolean, ios: *, android: *}}
 */
export default (tablet, mobile)=>{
  return {
    windows: Core.isIndexSearch('windows'),
    osx: Core.isIndexSearch('intel mac os x'),
    ios: tablet.iPad || mobile.iPhone || mobile.iPod,
    android: Core.is_android
  }
}
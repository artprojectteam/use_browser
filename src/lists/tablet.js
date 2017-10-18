import Core from '../modules/Core'

/**
 * get tablet
 * @returns {{iPad: boolean, android_tablet: (*|boolean)}}
 */
export default ()=>{
  return {
    iPad: Core.isIndexSearch('ipad'),
    android_tablet: (Core.is_android && !!Core.is_mobile) || Core.isIndexSearch('a1_07') || Core.isIndexSearch('sc-01c')  // A1-07, SC-01C is Tablet, But wrote "mobile"(2013.02 now)
  }
}
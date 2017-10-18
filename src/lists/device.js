import Core from '../modules/Core'

/**
 * which device
 * @param tablet {object}
 * @param mobile {object}
 * @returns {{tablet: boolean, mobile: boolean, desktop: boolean}}
 */
export default (tablet, mobile)=>{
  const is_tablet = Core.hasTrue(tablet)
  const is_mobile = Core.hasTrue(mobile)
  
  return {
    tablet: is_tablet,
    mobile: is_mobile,
    desktop: !is_tablet && !is_mobile
  }
}
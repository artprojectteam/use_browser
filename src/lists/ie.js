import Core from '../modules/Core'

/**
 * get ie versions
 * @returns {{msie: boolean, msie9: boolean, msie10: boolean, msie11: boolean, msie_edge: (boolean|*)}}
 */
export default ()=>{
  const str = 'msie'
  const msie = {
    msie: false,
    msie9: Core.isVersionSearch(`${str} 9.`),
    msie10: Core.isVersionSearch(`${str} 10.`),
    msie11: Core.isIndexSearch('trident/7'),
    msie_edge: Core.isIndexSearch('applewebkit') && Core.is_edge
  }
  
  msie.msie = Core.hasTrue(msie)
  return msie
}
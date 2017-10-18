import Core from '../modules/Core'

/**
 * browser engine
 * @returns {{webkit: boolean, gecko: boolean}}
 */
export default ()=>{
  return {
    webkit: Core.isIndexSearch('webkit/'),  // Safari,Chrome
    gecko: Core.isIndexSearch('gecko/') || Core.isIndexSearch('fxios/') // Firefox(fxiosはiOS版Firefox)
  }
}
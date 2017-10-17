export default class Core {
  /**
   * Core data initialize
   * @param ua {string}
   * @param appv {string}
   */
  static initialize(ua, appv){
    this.ua = ua
    this.appv = appv
    this.is_edge = this.isIndexSearch('edge')
    this.is_chrome = this.isIndexSearch('chrome')
    this.is_safari = this.isIndexSearch('safari')
    this.is_mobile = this.isIndexSearch('mobile')
    this.is_android = this.isIndexSearch('android')
  }
  
  /**
   * String index search
   * @param str
   * @returns {boolean}
   */
  static isIndexSearch(str){
    return !!~this.ua.indexOf(str)
  }
  
  /**
   * Version search
   * @param str
   * @returns {boolean}
   */
  static isVersionSearch(str){
    return !!~this.appv.indexOf(str)
  }
  
  /**
   * Does true exist in the object
   * @param obj {object}
   * @returns {boolean}
   */
  static hasTrue(obj){
    for(let key in obj){
      if(obj[key] === true) return true
    }
    return false
  }
  
  /**
   * array concat
   * @returns {{}}
   */
  static concatArr(){
    const args = Array.prototype.slice.call(arguments)
    let res = {}
  
    for(let i = 0, iLen = args.length; i < iLen; i++){
      const obj = args[i]
      Object.keys(obj).forEach(r=>{
        if(obj.hasOwnProperty(r)) res[r] = obj[r]
      })
    }
    
    return res
  }
  
}
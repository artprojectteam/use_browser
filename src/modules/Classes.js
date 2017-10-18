/**
 * html tag add class
 */
export default class {
  constructor(prefix){
    this.no_prefix = prefix
    this._html_class = ['js']
  }
  
  /**
   * setup class strings
   * @param obj {*} object array
   */
  set html_class(obj){
    Object.keys(obj).forEach(keys=>{
      const target = obj[keys]
      const res = target ? keys : this.no_prefix + keys

      this._html_class.push(res)
    })
  }
  
  /**
   * get class string array
   * @returns {Array}
   */
  get html_class(){return this._html_class}
}
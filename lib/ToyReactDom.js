class ToyReactDom {
  /**
   * @description 渲染方法
   * @author Lazy Duke
   * @date 2020-07-21
   * @static
   * @param {*} vdom
   * @param {*} element
   */
  static render(vdom, element) {
    const range = document.createRange()
    if (element.children.length) {
      range.setStartAfter(element.lastChild)
      range.setEndAfter(element.lastChild)
    } else {
      range.setStart(element, 0)
      range.setEnd(element, 0)
    }
    vdom.mountTo(range)
  }
}

export default ToyReactDom

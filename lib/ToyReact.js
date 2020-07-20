class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(vchild) {
    vchild.mountTo(this.root)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

export class Component {
  constructor() {
    this.children = []
  }

  setAttribute(name, value) {
    this[name] = value
  }

  mountTo(parent) {
    const vdom = this.render()
    vdom.mountTo(parent)
  }

  appendChild(vchild) {
    this.children.push(vchild)
  }
}

class ToyReact {
  /**
   * @description 创建元素
   * @author Lazy Duke
   * @date 2020-07-21
   * @static
   * @param {*} type
   * @param {Array} attributes
   * @param {Array} children
   * @returns
   */
  static createElement(type, attributes, ...children) {
    let element
    if (typeof type === 'string') {
      element = new ElementWrapper(type)
    } else {
      // prettier-ignore
      // eslint-disable-next-line new-cap, prettier/prettier
      element = new type
    }

    for (const name in attributes) {
      element.setAttribute(name, attributes[name])
    }

    insertChildren(children)

    return element

    /**
     * @description 渲染 Children
     * @author Lazy Duke
     * @date 2020-07-21
     * @param {Array} children
     */
    function insertChildren(children) {
      for (let child of children) {
        if (Array.isArray(child)) {
          insertChildren(child)
        } else {
          if (
            !(child instanceof ElementWrapper) &&
            !(child instanceof TextWrapper) &&
            !(child instanceof Component)
          ) {
            child = `${child}`
          }
          if (typeof child === 'string') {
            child = new TextWrapper(child)
          }
          element.appendChild(child)
        }
      }
    }
  }

  /**
   * @description 渲染方法
   * @author Lazy Duke
   * @date 2020-07-21
   * @static
   * @param {*} vdom
   * @param {*} element
   */
  static render(vdom, element) {
    vdom.mountTo(element)
  }
}

export default ToyReact

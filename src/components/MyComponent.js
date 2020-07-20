import ToyReact, { Component } from '../../lib/ToyReact'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <span>He</span>
          <span>Ha</span>
          <div>{this.children}</div>
        </div>
      </div>
    )
  }
}

export default MyComponent

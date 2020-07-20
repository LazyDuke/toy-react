import MyComponent from './components/MyComponent'
import ToyReact from '../lib/ToyReact'

const App = (
  <MyComponent name="app" id="app">
    <div>my componet children</div>
  </MyComponent>
)

ToyReact.render(App, document.body)

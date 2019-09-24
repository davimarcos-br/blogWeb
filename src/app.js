import React from 'react'
import { Provider} from 'react-redux'
import store from './store'
//import Posts from './components/Posts'
import Blog from './Blog'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Blog />
      </div>
    </Provider>
  )
}
  

export default App

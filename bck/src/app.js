import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Post from './component/Post'

function App() {
    return (
      <Provider store={store}>
        <Post />
      </Provider>
    )
}

export default App
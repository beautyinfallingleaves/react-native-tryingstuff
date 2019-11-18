import React from 'react';
import { ScreenOrientation } from 'expo'
import { StatusBar } from 'react-native'
import { PostcardView } from './client/components'
import { Provider } from 'react-redux'
import store from './client/store'
import { firebaseConfig } from './constants/ApiConfig'
import * as firebase from 'firebase'

class App extends React.Component {
  constructor() {
    super()

    //initialize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <PostcardView />
      </Provider>
    )
  }
}

export default App

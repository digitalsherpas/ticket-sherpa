import { authenticateUser, getUserSession } from '../auth/awsCognito.js';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RoutesContainer from '../containers/RoutesContainer.js';
import store, { history } from '../store';
import { persistStore, autoRehydrate } from 'redux-persist'

export default class AppProvider extends Component {

  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(store, {blacklist: ['routing']}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <div>Loading...</div>
    }
    return (
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
    )
  }
}

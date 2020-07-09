import React, { PureComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from 'app/system/navigation'
import { Provider } from 'react-redux'
import { Persistor } from 'redux-persist'
import { Store } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore, IApplicationState } from 'app/system/redux'
import { Loader } from 'app/system/view/Loader'
import { localization } from 'app/system/localization'

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted… is deprecated',
  'Module RCTImageLoader'
];

interface IProps {

}

interface IState {

}

export class App extends PureComponent<IProps, IState>{
  private readonly store: Store
  private readonly persistor: Persistor

  constructor(props: IProps) {
    super(props)
    const { store, persistor } = configureStore(this.onStoreCreated.bind(this))
    this.store = store
    console.log('Store', store.getState())
    this.persistor = persistor
  }

  onStoreCreated = (): void => {
    const state: IApplicationState = this.store.getState()
    localization.list.setLanguage(state.system.language)
  }

  renderLoader = (): JSX.Element => {
    return (
      <Loader />
    )
  }

  render(): JSX.Element {
    return (
     <PersistGate
       loading={this.renderLoader()}
       persistor={this.persistor}
     >
        <Provider store={this.store}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </Provider>
     </PersistGate>
    )
  }
}

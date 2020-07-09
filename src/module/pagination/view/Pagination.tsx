import React, { PureComponent } from 'react'
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import {
  windowWidth,
  styleSheetCreate,
  style,
  Color,
} from 'app/system/helpers'
import { IApplicationState, connectStore } from 'app/system/redux'
import { paginationAsyncAction } from 'app/module/pagination/store'
import { Loader } from 'app/system/view/Loader'

interface IProps {
}

interface IState {
  activePage: number
  bottomLine: number
  timberLine: number
}

interface IStateProps {
  isLoading: boolean
  posts: Array<IPosts>
}

interface IDispatchProps {
  getPosts(): Promise<void>
}

@connectStore(
  (state: IApplicationState): IStateProps => ({
    isLoading: state.pagination.isLoading,
    posts: state.pagination.posts,
  }),
  (dispatch: any): IDispatchProps => ({
    async getPosts(): Promise<void> {
      await dispatch(paginationAsyncAction.getPosts())
    },
  })
)
export class Pagination extends PureComponent
  <IStateProps & IDispatchProps & IProps,IState>{

  state = {
    activePage: 1,
    bottomLine: 0,
    timberLine: 10,
  }

  async componentDidMount(): Promise<void> {
    await this.props.getPosts()
  }

  onChangeActivePage = (activePage: number): void => {
    this.setState({ activePage })
    if (activePage === 1) {
      this.setState({ bottomLine: 0, timberLine: 11 })
      return
    }
    const bottomLine = (activePage - 1) * 10
    this.setState({ bottomLine, timberLine: bottomLine + 10 })
  }

  render() {

    if (this.props.isLoading) {
      return <Loader />
    }

    const numberPages = this.props.posts.length / 10
    const numberButtons  = Array.from({ length: numberPages },
      (_, number) => number + 1)

    const { activePage, timberLine, bottomLine } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.controls}
        >
          {
            numberButtons.map((item: number) => {
              return (
                <TouchableOpacity
                  key={item.toString()}
                  onPress={this.onChangeActivePage.bind(this, item)}
                  style={activePage === item ? styles.activeControlButton : styles.controlButton}
                >
                  <Text>
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <ScrollView contentContainerStyle={styles.cards}>
          {
            this.props.posts
              .filter(item => item.id > bottomLine && item.id < timberLine)
              .map(item => {
                return (
                  <View
                    key={item.id.toString()}
                    style={styles.card}
                  >
                    <Text>
                      {item.id}
                    </Text>
                  </View>
                )
              })
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
  }),
  controls: style.view({
    width: windowWidth * 0.88,
    height: windowWidth * 0.2,
    marginHorizontal: windowWidth * 0.06,
    marginTop: windowWidth * 0.05,
  }),
  controlButton: style.view({
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
    backgroundColor: Color.philippineGray,
    marginRight: windowWidth * 0.05,
  }),
  activeControlButton: style.view({
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
    backgroundColor: Color.mayaBlue,
    marginRight: windowWidth * 0.05,
  }),
  cards: style.view({
    alignItems: 'center',
  }),
  card: style.view({
    backgroundColor: Color.philippineGray,
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.88,
    height: windowWidth * 0.2,
    marginBottom: windowWidth * 0.05,
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowWidth * 0.02,
  }),

})
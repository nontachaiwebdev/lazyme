import React from 'react'
import ReactDom from 'react-dom';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose'

const Lazy = (props) => (
  <div ref={ref => props.refs.store('lazy', ref)} ></div>
)

// const initLoadState = (props) => (props.allowLazy ? props.allowLazy : true)

class RefsStore {
  store(name, value) {
    this[name] = value;
  }
}

const lifecycleHoc = lifecycle({
  componentWillMount () {
    const { handleScroll } = this.props
    window.addEventListener("scroll", handleScroll)
  },
  componentWillUnmount () {
    window.removeEventListener("scroll")
  }
})

const handleEvent = withHandlers({
  handleScroll: props => event => {
    const { onLoadMore, isLoad } = props
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const node = ReactDom.findDOMNode(props.refs.lazy);
    if(node.getBoundingClientRect().top-viewportHeight <= 100){
      if(!isLoad){
        // setOnLoad(false)
        onLoadMore()
      }
    }
  }
})

export default compose(
  withProps({ refs: new RefsStore() }),
  // withState('onLoad', 'setOnLoad', props => initLoadState(props)),
  handleEvent,
  lifecycleHoc
)(Lazy)

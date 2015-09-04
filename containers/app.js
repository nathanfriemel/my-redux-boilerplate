import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSomething, // Actions
  SOME_CONSTANT // Constants
} from '../actions';

// Components
// import Something from '../components/something';

const styles = {
  wrapper: {
    margin: 0
  }
};

class App extends Component {
  /**
   * Bind this to non react api function
   * @param  {obj} props
   */
  constructor (props) {
    super(props);
    this.mouseEventThing = this.mouseEventThing.bind(this);
  }

  /**
   * Trigger initial fetch of user awards
   */
  componentDidMount () {
    const { dispatch, user_id } = this.props;
    dispatch(fetchSomething()); // Good place to do the initial request
  }

  render () {
    const {  } = this.props;

    return (
      <div styles={styles.wrapper}>

      </div>
    );
  }

  /**
   * ZOMG mouse event thing happened
   */
  mouseEventThing () {
    const {dispatch} = this.props;
    // dispatch(something({})); // dispatch something
  }
}

/**
 * State from the reducer to load into this app
 * @param  {obj} state State from reducer
 * @return {obj}       Props
 */
function mapStateToProps (state) {
  return {
    something: state.something
  };
}

export default connect(
  mapStateToProps,
  { fetchSomething }
)(App);

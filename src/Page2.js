import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Page2.css';

class Page2 extends Component {
    multiply = () => {
        this.props.dispatch({ type: 'MULTIPLY' });
      }
    
    render() {
        return (
            <div id="Page2">
                <button id="multply" id="multiply" onClick={this.multiply}>Multiply</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      number: state.number
    };
  }
  
  export default connect(mapStateToProps)(Page2);
import React, { Component } from 'react'
import MainComponent from './MainComponent'
import { connect } from 'react-redux';
import { increment } from './redux/actions'

export class ReduxExample extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { count, increment } = this.props
        return (
            <div>
                <MainComponent count={count} handleFireClick={increment} example='Redux'/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxExample);
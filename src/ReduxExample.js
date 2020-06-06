// METHOD:1 Functional component using react hooks

import React, { Component } from 'react'
import MainComponent from './MainComponent'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './redux/actions'

function ReduxExample() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <MainComponent count={count} handleFireClick={() => dispatch(increment())} example='Redux' />
        </div>
    );
}

export default ReduxExample



// METHOD:2 Class component using HOC

// import React, { Component } from 'react'
// import MainComponent from './MainComponent'
// import { connect } from 'react-redux';
// import { increment } from './redux/actions'

// export class ReduxExample extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         let { count, increment } = this.props
//         return (
//             <div>
//                 <MainComponent count={count} handleFireClick={increment} example='Redux'/>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return { count: state.count };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//     };
// };


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ReduxExample);
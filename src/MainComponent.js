import React, { Component } from 'react'

export class MainComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { count, handleFireClick, example } = this.props
        return (
            <div className='component-wrapper'>
                <p className='component-text'>You fired using {example}</p>
                <p className='component-text'><span className='component-number'>{count}</span>times.</p>
                <p className='component-fire-button' onClick={handleFireClick}>🔥</p>
            </div>
        )
    }
}

export default MainComponent

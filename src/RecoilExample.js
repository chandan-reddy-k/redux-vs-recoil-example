import React, { Component } from 'react'
import MainComponent from './MainComponent'
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from './recoil/atoms';
import { incrementSelector } from './recoil/selectors';

function RecoilExample() {
    const [count, setCounter] = useRecoilState(counterState);
    let value = useRecoilValue(incrementSelector);

    return (
        <div>
            <MainComponent count={count} handleFireClick={() => setCounter(value)} example='Recoil' />
        </div>
    );
}

export default RecoilExample

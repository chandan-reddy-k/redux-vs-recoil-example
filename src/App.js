import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxExample from './ReduxExample';
import RecoilExample from './RecoilExample';
import { Provider as ReduxProvider } from "react-redux";
import store from './redux/store';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React State Management</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>The Ultimate Face-Off</p>
      </header>
      <div className='notice-bar'>Read the detailed blog post on Recoil vs Redux <a href='https://medium.com/@chandan.reddy/react-recoil-vs-redux-the-ultimate-react-state-management-face-off-188a729a70ee?sk=e9dff2810fb3208fb6c73754b294bc56'>here</a>.</div>
      <div className='body-container'>
        <div className='left-container'>
          <ReduxProvider store={store}>
            <ReduxExample />
          </ReduxProvider>
        </div>
        <div className='right-container'>
          <RecoilRoot>
            <RecoilExample />
          </RecoilRoot>
        </div>
      </div>
      <footer className='footer-wrapper'>
        <p className='footer-text'>Click on &nbsp; "🔥" &nbsp; to increment the count.</p>
        <p className='footer-text'>
          <a href='https://chandan.dev'>🌐 chandan.dev</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

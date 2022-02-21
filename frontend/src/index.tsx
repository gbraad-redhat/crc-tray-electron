import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter,
  Route,
  Routes } from "react-router-dom";
import SplashWindow from './windows/SplashWindow';
import SetupWindow from './windows/SetupWindow';
import LogsWindow from './windows/LogsWindow';
import ConfigurationWindow from './windows/ConfigurationWindow';
import MiniStatusWindow from './windows/MiniStatusWindow';
import PullSecretChangeWindow from './windows/PullSecretChangeWindow';
import { AboutWindow } from './windows/about/AboutWindow';
import { DialogWindow } from './windows/dialog/DialogWindow';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<p>No route given</p>} />
        <Route path="/splash" element={<SplashWindow />} />
        <Route path="/setup" element={<SetupWindow />} />
        <Route path="/logs" element={<LogsWindow />} />
        <Route path="/configuration" element={<ConfigurationWindow />} />
        <Route path="/ministatus" element={<MiniStatusWindow />} />
        <Route path="/pullsecret" element={<PullSecretChangeWindow />} />
        <Route path="/about" element={<AboutWindow />} />
        <Route path="/dialog" element={<DialogWindow />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


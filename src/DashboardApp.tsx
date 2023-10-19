/// <reference types="webpack-env" />

import { createRoot } from 'react-dom/client';
import DashboardJupyterLab from './DashboardJupyterLab';

import "./../style/index.css";

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

if (module.hot) {
  module.hot.accept('./DashboardJupyterLab', () => {
    const DashboardJupyterLab = require('./DashboardJupyterLab').default;
    root.render(<DashboardJupyterLab/>);
  })
}

root.render(<DashboardJupyterLab />);

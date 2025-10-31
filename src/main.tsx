import React from 'react';
import ReactGA from 'react-ga4';
import {ViteReactSSG} from 'vite-react-ssg/single-page';

import App from '@/components/App/App.tsx';
import 'the-new-css-reset/css/reset.css';
import './font.css';
import {config} from '@/config.ts';

if (config.gaId) {
    ReactGA.initialize(config.gaId);
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

export const createRoot = ViteReactSSG(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

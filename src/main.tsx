import React from 'react';
import {ViteReactSSG} from 'vite-react-ssg/single-page';

import App from '@/components/App/App.tsx';
import 'the-new-css-reset/css/reset.css';
import './font.css';

export const createRoot = ViteReactSSG(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

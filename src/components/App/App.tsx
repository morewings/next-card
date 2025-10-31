import type {FC} from 'react';
import {useEffect, Fragment} from 'react';
import ReactGA from 'react-ga4';

import {Background, Container} from '@/components/Background';
import {Header} from '@/components/Header';
import {LinksList} from '@/components/LinksList';
import {config} from '@/config.ts';

const App: FC = () => {
    useEffect(() => {
        if (config.gaId) {
            ReactGA.initialize(config.gaId);
        }
    }, []);
    useEffect(() => {
        ReactGA.send({hitType: 'pageview', page: window.location.pathname, title: window.document.title});
    }, []);
    return (
        <Fragment>
            <Background />
            <Container>
                <Header />
                <LinksList />
            </Container>
        </Fragment>
    );
};

export default App;

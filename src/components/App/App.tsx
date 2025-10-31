import type {FC} from 'react';
import {useEffect, Fragment} from 'react';
import ReactGA from 'react-ga4';

// import './index.css';
import {Background, Container} from '@/components/Background';
import {Header} from '@/components/Header';
import {LinksList} from '@/components/LinksList';

const App: FC = () => {
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

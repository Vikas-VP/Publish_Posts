import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';

const Home = (props) => {
    const { children } = props;
    return (
        <div className="App container-fluid" style={{ position: 'relative' }}>
            <Header {...props} />
            <SecondaryHeader {...props} />
            {children}
        </div>
    );
};

export default withRouter(Home);

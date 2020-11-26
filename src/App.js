import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
    Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home'
import PublishedPosts from './components/PublishedPosts';
import { addPost, searchItem } from './actions/index';
import NewPostForm from './components/NewPostForm';

const customHistory = createBrowserHistory();


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <Router history={customHistory}>
                    <Home {...this.props}>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/newPost" />} />
                            <Route exact path="/newPost" component={NewPostForm} />
                            <Route exact path="/publishedPosts" component={PublishedPosts} />
                        </Switch>
                    </Home>
                </Router>
            </div>
        );
    }
}

const mapDispatchToProps = {
    reducerFuncAddPost: addPost,
    reducerFuncSearchItem: searchItem,
}

const mapStateToProps = state => ({
    isModalOpen: state.projects.isModalOpen,
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

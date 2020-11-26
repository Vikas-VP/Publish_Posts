import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';



class PublishedPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: this.props.post,
        }
    }


    componentWillReceiveProps = (nextProps) => {
        const { searchValue, post } = nextProps;
        const { posts } = this.state;
        let getSearchText = searchValue;
        getSearchText = getSearchText.toUpperCase().trim();
        const filterResult = [];
        if (!getSearchText) {
            this.setState({ posts: [...post] });
        } else {
            for (let i = 0; i < posts.length; i += 1) {
                if (posts[i].title.toUpperCase().indexOf(getSearchText) !== -1) {
                    filterResult.push(posts[i]);
                    this.setState({ posts: [...filterResult] });
                }
            }
            if (filterResult.length === 0) {
                this.setState({ posts: [] });
            }
        }
    }


    render() {
        const { posts } = this.state;
        return <div style={{ display: 'flex', height: '80vh', flexDirection: 'column' }}>
            <div className="app-card-list" id="app-card-list" style={{ textAlign: '-webkit-center', overflow: 'auto' }}>
                {
                    posts.map((val, index) => <Cards details={val} key={index + 1} />)
                }
            </div>
        </div>
    }
}


const mapDispatchToProps = {
}

const mapStateToProps = state => ({
    post: state.projects.post,
    searchValue: state.projects.searchValue,
})
export default connect(mapStateToProps, mapDispatchToProps)(PublishedPosts);


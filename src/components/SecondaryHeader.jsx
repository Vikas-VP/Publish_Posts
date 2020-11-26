import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';


class SecondaryHeader extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }

    handleNewPostClick = () => {
        const { history } = this.props;
        history.push('/newPost');
    }

    handlePublishClick = () => {
        const { history } = this.props;
        history.push('/publishedPosts');
    }


    render() {
        return <div>
            <Form>
                <Form.Group as={Col} xs={12} md={12}>
                    <Button onClick={this.handleNewPostClick} className="fs-13 rounded-0 h-35 w-120 ff-Arial">
                        New Post
                        </Button>
                    <Button
                        onClick={this.handlePublishClick}
                        className="ml-3 fs-13 rounded-0 h-35 w-120 ff-Arial submit-btn-bg-clr"
                    >
                        Published
                        </Button>
                </Form.Group>
            </Form>
        </div>
    }
}


export default SecondaryHeader;


import React, { Component } from 'react';
import { Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';


const getSubmitLabel = () => 'Publish';
const getNameLabel = () => 'Title*';
const getDescriptionLabel = () => 'Description*';

export class NewPostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            showTitleError: false,
            showDescriptionError: false,
        }
    }

    handleSubmitClick = () => {
        const { reducerFuncAddPost } = this.props;
        const { title, description } = this.state;
        if (title === '' && description === '') {
            this.setState({
                showTitleError: true,
                showDescriptionError: true,
            })
        } else if (title === '') {
            this.setState({
                showTitleError: true,
            })
        } else if (description === '') {
            this.setState({
                showDescriptionError: true,
            })
        } else if (title !== '' && description !== '') {
            this.setState({
                showTitleError: false,
                showDescriptionError: false,
                title: '',
                description: '',
            })
            reducerFuncAddPost({ title, description });
            alert('Post Added Successfully');
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
            showTitleError: false,
        })
    }

    handleChange = (html) => {
        this.setState({
            description: html,
            showDescriptionError: false,
        })
    }

    render() {
        const { title, description, showDescriptionError, showTitleError } = this.state;
        return (
            <>
                <Form style={{ width: '800px' }}>
                    <Form.Row>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Label className="fs-14">{getNameLabel()}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="1"
                                name="name"
                                value={title}
                                onChange={this.handleTitleChange}
                                className="rounded-0"
                                isInvalid={showTitleError}
                            />
                            <Form.Control.Feedback type="invalid">
                                {'This filed is mandatory'}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} xs={12} md={12}>
                            <Form.Label className="fs-14">{getDescriptionLabel()}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="1"
                                name="description"
                                style={{ height: '200px' }}
                                value={description}
                                onChange={e => this.handleChange(e.target.value)}
                                className="rounded-0"
                                isInvalid={showDescriptionError}
                            />
                            <Form.Control.Feedback type="invalid">
                                {'This filed is mandatory'}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button
                            onClick={this.handleSubmitClick}
                            className="ml-3 fs-13 rounded-0 h-35 w-120 ff-Arial submit-btn-bg-clr"
                        >
                            {getSubmitLabel()}
                        </Button>
                    </Form.Row>
                </Form>
            </>
        )
    }
}


const mapDispatchToProps = {
    reducerFuncAddPost: addPost,
}

const mapStateToProps = state => ({
    isModalOpen: state.projects.isModalOpen,
})
export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);


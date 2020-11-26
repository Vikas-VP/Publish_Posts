import React from 'react';
import { Card } from 'react-bootstrap';
import marked from 'marked';

class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
        }
    }

    render() {
        const { details } = this.props;
        return (
            <Card style={{ width: '700px', margin: '50px' }}>
                <Card.Header><b>{details.title}</b></Card.Header>
                <Card.Body>
                    <Card.Title style={{ display: 'flex' }}>Description:</Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: marked(details.description) }}>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Cards;


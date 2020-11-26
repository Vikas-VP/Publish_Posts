import React from 'react';
import { Form } from 'react-bootstrap';


class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }

    searchField = (event) => {
        const { reducerFuncSearchItem } = this.props;
        reducerFuncSearchItem(event.target.value);
    }


    render() {
        return <div>
            <header className="app-header">
                <Form style={{ margin: '20px' }}>
                    <div style={{ textAlign: '-webkit-center' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            onChange={this.searchField}
                            className="rounded-0"
                            style={{ width: '500px' }}
                        />
                    </div>
                </Form>
            </header>
        </div>
    }
}


export default Header;


import React, { Component } from 'react';
import './users.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => this.setState({ users }, () => {
                console.log('Users fetched, ', users);
            }));
    }

    render() {
        const users = this.state.users.map(user =>
            <li key={ user.id }>{ user.firstName } { user.lastName }</li>
        );
        return (
            <div>
                <h2>Users</h2>
                <ul>
                    { users }
                </ul>
            </div>
        )
    }
}

export default Users;
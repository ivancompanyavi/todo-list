import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { TodoPost } from '../types';
import Todo from './todo';
import { connect } from 'react-redux';
import { getSelectedPost } from '../selectors';
import * as actions from '../actions';
import { match } from 'react-router';
import getHistory from '../../history';


interface Props {
    setTodo: typeof actions.setTodo;
};

interface State {
    title: string;
    description: string;
};

export class TodoCreation extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeTitle(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ title: event.currentTarget.value });
    }

    changeDescription(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ description: event.currentTarget.value });
    }

    submit() {
        const { title, description } = this.state;
        this.props.setTodo(title, description);
        getHistory().push('/');
    }

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.changeTitle} />
                <input value={this.state.description} onChange={this.changeDescription} />
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default connect(
    null,
    {
        setTodo: actions.setTodo,
    }
)(TodoCreation);
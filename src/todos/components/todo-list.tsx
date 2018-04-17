import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { TodoPost } from '../types';
import Todo from './todo';
import { connect } from 'react-redux';
import { getPosts } from '../selectors';
import * as actions from '../actions';


interface Props {
    posts: TodoPost[];
    getTodos: typeof actions.getTodos;
};

interface State {};

export class TodoList extends React.Component<Props, State> {

    async componentWillMount() {
        await this.props.getTodos();
    }

    render() {
        const { posts } = this.props;
        return (
            <div>
                { posts.map((todo, i) => <Todo key={i} title={todo.title} description={todo.description} />) }
                <Link to="/todos/new">Create TODO </Link>
            </div>
        )
    }
}

export default connect(
    createStructuredSelector({
        posts: getPosts,
    }),
    {
        getTodos: actions.getTodos,
    }
)(TodoList);
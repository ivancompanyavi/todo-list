import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { TodoPost } from '../types';
import Todo from './todo';
import { connect } from 'react-redux';
import { getSelectedPost } from '../selectors';
import * as actions from '../actions';
import { match } from 'react-router';


interface Props {
    selectedPost: TodoPost;
    getTodo: typeof actions.getTodo;
    match: match<any>,
};

interface State {};

export class TodoList extends React.Component<Props, State> {

    async componentWillMount() {
        await this.fetchData();
    }

    async fetchData() {
        await this.props.getTodo(this.props.match.params.id);
    }

    render() {
        const { title, description } = this.props.selectedPost;
        return (
            <div>
                <div>TODO detail</div>
                <Todo description={description} title={title} />
            </div>
        )
    }
}

export default connect(
    createStructuredSelector({
        selectedPost: getSelectedPost,
    }),
    {
        getTodo: actions.getTodo,
    }
)(TodoList);
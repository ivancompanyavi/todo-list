import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import getHistory from './history'
import store from './store';

import TodoListComponent from './todos/components/todo-list';
import TodoDetailComponent from './todos/components/todo-detail';
import TodoCreationComponent from './todos/components/todo-creation';

interface Props {};
interface State {};

export default class MainRouter extends React.Component<Props, State> {
    render() {
        const TodosRoute = () => (
            <Switch>
                <Route path="/todos/new" component={TodoCreationComponent}/>
                <Route path="/todos/:id" component={TodoDetailComponent}/>
                <Route path="/todos" component={TodoListComponent}/>
                <Route component={TodoListComponent}/>
            </Switch>
        );
        return (
            <Provider store={store}>
                <ConnectedRouter history={getHistory()}>
                    <Switch>
                        <Route path='/todos' component={TodosRoute}/>
                        <Route component={TodosRoute}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

import * as React from 'react';
import { TodoPost } from '../types';
import styled from 'styled-components';


const Todo = (props: TodoPost) => {
    const Title = styled.div`
        text-align: center;
        font-weight: bold;
        margin-bottom: 1em;
    `;
    const Wrapper = styled.div`
        padding: 1em;
        margin-bottom: 2em;
        background-color: red;
        width: 100%;
    `;

    const Content = styled.div`
        background-color: white;
        padding: 2em;
    `;
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Content>{props.description}</Content>
        </Wrapper>
    )
};

export default Todo;

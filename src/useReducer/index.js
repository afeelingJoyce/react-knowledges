import React, { useReducer } from 'react';

import { Button } from 'antd'




function Reducer(state, action) {

    switch (action.type) {
        case 'add':

            return Object.assign({}, state, { count: state.count + 1 })

        case 'sub':

            return Object.assign({}, state, { count: state.count - 1 })

        case 'custom':

            return Object.assign({}, state, { count: action.value })

        default:
            break;
    }

}


function Index() {



    const initData = {
        count: 1
    }

    const [data, dispatch] = useReducer(Reducer, initData)

    return (
        <>
            <div>{data.count}</div>
            <Button onClick={() => dispatch({ type: 'add' })}>click me</Button>
            <Button onClick={() => dispatch({ type: 'custom', value: 100 })}>click me</Button>
            <Button onClick={() => dispatch({ type: 'sub' })}>click me</Button>
        </>
    )

}

export default Index
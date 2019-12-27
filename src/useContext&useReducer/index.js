import React, { useReducer, useState } from 'react'

import { Card, Button } from 'antd'
import { CustomContext } from "./context"

import Child from './child';


function Reducer(state, action) {

    switch (action.type) {
        case 'add':

            return Object.assign({}, state, { count: state.count + 1 })

        case 'sub':

            return Object.assign({}, state, { count: state.count - 1 })

        case 'init':
            return Object.assign({}, state, { count: 1 })

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
            <Card>这是一个使用useReducer和useContext实现redux功能的小例子: count的值为{data.count}</Card>

            <CustomContext.Provider value={{ data, dispatch }}>
                <Child />

            </CustomContext.Provider>


        </>
    )
}

export default Index
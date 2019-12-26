
import React, { Component, useContext } from 'react';
import { CounterContext } from './counterContext'
function Child() {

    const context = useContext(CounterContext)


    return (
        <>
            <div>显示父级组件传递过来的count:{context.count}</div>
        </>
    )
}

export default Child
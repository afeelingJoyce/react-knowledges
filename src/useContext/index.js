import React, { useState, useEffect, useContext, createContext } from 'react';

import { Button } from "antd";

import Child from './child'

import { CounterContext } from './counterContext'



function Index() {

    const [count, setCount] = useState(100)

    return (
        <>
            <div>hello world</div>
            <Button onClick={() => setCount(count + 1)}>click me</Button>
            <CounterContext.Provider value={{ count }}>
                <Child></Child>
            </CounterContext.Provider>
        </>
    )
}



export default Index
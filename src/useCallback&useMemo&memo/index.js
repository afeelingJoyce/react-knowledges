import React, { useState, useMemo, useEffect, memo, useCallback } from 'react';
import { Button, Card } from 'antd'



// useMemo传递数据 useCallback传递函数 当useMemo传递是值是单个值且是useState定义的 不需要使用useMemo优化 如果传递数据是对象 需要使用useMemo优化

function Child(props) {

    console.log('组件渲染了')
    const { callback, data } = props;




    function onOk() {
        console.log('执行了')
        callback(parseInt(new Date().getTime() / 1000))
    }

    return (
        <>
            <Card>
                <div>子组件区域{data.aa}</div>
                <Button onClick={onOk}>调用父组件函数</Button>
            </Card>

        </>
    )

}

const MemoChild = memo(Child)

function App() {

    const [count, setCount] = useState(100)
    const [aa, setAA] = useState(1)

    function handelClick(value) {

        console.log(value)
    }


    return (
        <div className="App">
            <div>{count}</div>
            <Button onClick={() => setCount(new Date().getTime())}>click me</Button>

            {/* <MemoChild callback={useCallback(handelClick, [])} data={{ aa, }} /> */}
            <MemoChild callback={useCallback(handelClick, [])} data={useMemo(() => ({ aa, }), [aa])} />

        </div>
    )
}

export default App;

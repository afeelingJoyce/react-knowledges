import React, { useState, useMemo, useEffect, memo, useCallback } from 'react';
import { Button, Card } from 'antd'


// 如果不使用useCallback那么父组件每次执行自己的逻辑 都会触发子组件的重新渲染

function Child(props) {

    console.log(123)
    const { callback } = props;




    function onOk() {
        console.log('执行了')
        callback(parseInt(new Date().getTime() / 1000))
    }

    return (
        <>
            <Card>
                <div>子组件区域</div>
                <Button onClick={onOk}>调用父组件函数</Button>
            </Card>

        </>
    )

}

const MemoChild = memo(Child)

function App() {

    const [count, setCount] = useState(100)

    function handelClick(value) {

        console.log(value)
    }


    return (
        <div className="App">
            <div>{count}</div>
            <Button onClick={() => setCount(new Date().getTime())}>click me</Button>
            {/* <MemoChild callback={handelClick} /> */}
            {/* <MemoChild callback={(value, event) => handelClick(value, event)} /> */}
            {/* <MemoChild callback={useCallback(handelClick, [aa])} /> */}
            <MemoChild callback={useCallback((value) => { handelClick(value) }, [])}></MemoChild>

        </div>
    )
}

export default App;

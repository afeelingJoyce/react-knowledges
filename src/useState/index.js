import React, { useState } from 'react';

import { Button } from "antd";


function Index(props) {

    // 数组结构 useState返回值是一个数组  数组的第一项是state 第二个值是更新state的函数

    const [count, setCount] = useState(100)


    return (
        <>
            <div>{count}</div>
            <Button onClick={() => setCount(count + 1)}>click me</Button>
        </>
    )

}

export default Index
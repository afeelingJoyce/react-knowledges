import React, { useEffect, useState } from 'react';

import { Button } from "antd";



function Index(props) {


    const [count, setCount] = useState(100)


    // 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。


    // 只需要在组件加载以及组件卸载时 执行操作的  依赖性可以写成一个空数组

    useEffect(() => {
        console.log('componentDidMount')
        return () => {
            console.log('componentWillUnmount')
        }
    }, []);


    // 只有在count更新时  才执行对应的effect里面的逻辑

    useEffect(() => {

        console.log('count update')

    }, [count]);


    //发起请求的正确使用实例
    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
            if (!ignore) setData(result.data);
        }

        fetchData();
        return () => { ignore = true; }
    }, [query]);



    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1); // 这个 effect 依赖于 `count` state
        }, 1000);
        return () => clearInterval(id);
    }, []); // 🔴 Bug: `count` 没有被指定为依赖

    //    指定 [count] 作为依赖列表就能修复这个 Bug，但会导致内部每次改变时都被重置。这并不是我们想要的。
    //    要解决这个问题，我们可以使用 setState 的函数式更新形式。
    //    它允许我们指定 state 该 如何 改变而不用引用 当前 state：

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
        }, 1000);
        return () => clearInterval(id);
    }, []); // ✅ 我们的 effect 不适用组件作用域中的任何变量


    return (
        <>
            <div>{count}</div>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
        </>
    )
}


export default Index
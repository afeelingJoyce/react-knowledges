import React, { useState, useMemo } from 'react';


export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');


    // 仅当count发生变化时  才重新useMemo里面的逻辑 useMemo一般用于返回数据

    // function getSum(params) {
    //     console.log(123)
    //     let sum = 0;
    //     for (let i = 0; i < count * 100; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }

    // const expensive = useMemo(getSum, [count])


    const expensive = useMemo(() => {
        console.log(11)
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count])


    return <div>
        <h4>{count}-{val}-{expensive}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <input value={val} onChange={event => setValue(event.target.value)} />
        </div>
    </div>;
}

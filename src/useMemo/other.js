import React, { useState, useMemo, memo } from 'react';


const MemoChild = memo(Child)

export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    
    const data = useMemo(() => {
        return {
            count,
        }
    }, [count])

    return <div>
        <h4>{count}-{val}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <input value={val} onChange={event => setValue(event.target.value)} />
            <MemoChild data={data}></MemoChild>
        </div>
    </div>;
}


function Child(props) {

    console.log(123)

    const { data } = props;
    return (
        <>
            <div>{data.count}</div>
        </>
    )

}
import React, { useContext } from 'react';
import { CustomContext } from "./context";
import { Button, Card } from 'antd'

function Child() {

    const { data, dispatch } = useContext(CustomContext)


    return (
        <>
            <Card>
                <div>展示父组件传过来的数据count:{data.count}</div>
                <Button onClick={() => dispatch({ type: 'add' })}>add</Button>
                <Button onClick={() => dispatch({ type: 'sub' })}>sub</Button>
                <Button onClick={() => dispatch({ type: 'init' })}>init</Button>
            </Card>
        </>
    )

}

export default Child
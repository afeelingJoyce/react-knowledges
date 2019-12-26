import React, { Component } from 'react';

class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            nickName: 'mccree',
            age: '20'
        }
    }

    AA = () => {
        console.log('aa')

    }

    BB = () => {
        this.setState({
            nickName: 'xxxixixi'
        })
        this.setState({
            list: [20]
        })
    }

    getAge = () => {

        console.log('我被调用了')
        this.setState({
            list: [12, 22]
        })
    }

    componentWillMount() {

    }

    componentDidMount() {

        console.log(this)
        this.AA()
        this.BB()
        this.getAge()


    }

    render() {

        const { list, nickName, age } = this.state;

        console.log(list)
        return (
            <>
                <div>123</div>
                <button onClick={() => this.getAge()}></button>
            </>
        )
    }
}

export default Index
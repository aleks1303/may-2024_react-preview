import React from "react";


type MyProps = {message: string}
type MyState = {count:number}
class SomeComponent extends React.Component<MyProps, MyState> {
    state:MyState = {count:0}
    render() {
        return <div>
            <h2>{this.props.message} {this.state.count}</h2>
            <button
            onClick={
                ()=>{this.setState((state) =>{
                    return {
                        count:state.count+1
                    }
                })
            }}>increment</button>

        </div>
    }
}
export default SomeComponent;
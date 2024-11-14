import React from "react";

interface User{
    id:number, name:string
}
type MyType ={users:User[]}

class UserComponent extends React.Component<{}, MyType> {

    state: MyType = {
        users:[]
    }
    componentDidMount() {
        console.log('mount')

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json())
            .then(value => {
                this.setState({...this.state, users:value})
            });
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<MyType>, snapshot?: any) {
        console.log('did update')
        console.log(prevState)
    }

    render() {
    return (
        <ul>
            {
                this.state.users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </ul>
    );
}
}
export default UserComponent
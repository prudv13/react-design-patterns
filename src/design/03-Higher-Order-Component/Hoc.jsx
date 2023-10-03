import React from 'react'

function User(props){
    return <div>
        <h1>This is User Component</h1>
        <h1>Hello {props.username}</h1>
    </div>
}

function Login(){
    return <h1>This is Login Component</h1>
}

const AuthCheck = (Component) => {
    let authenticated = true;

    // wrapped component
    return (props) => {
        if(authenticated) {
            return <Component username={props.username} />
        }
        else {
            return <Login />
        }
    }
}

const AuthChecked = AuthCheck(User)

export default AuthChecked;
import React, {Component} from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops, it seems you've encountered an error</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
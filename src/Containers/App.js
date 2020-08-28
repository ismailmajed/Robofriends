import React, { Component } from 'react';
import CardList from './../Components/CardList';
import Scroll from './../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import ErrorBoundary from '../Components/ErrorBoundary'




class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange(event) {
        this.setState({ searchfield: event.target.value });
        //console.log(this.state.searchfield)
    }



    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        //console.log(filteredRobots);
        return (
            <div className='tc'>
                <h1> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;
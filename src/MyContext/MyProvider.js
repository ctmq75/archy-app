import React, { Component } from 'react'
import MyContext from './MyContext';

export default class MyProvider extends Component {
    state = {
        coords: {

        }
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    coords: this.state.cars,
                    }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
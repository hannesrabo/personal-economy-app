import React, { Component } from "react";

MainContext = React.createContext('not initialized')

export const ContextConsumer = MainContext.Consumer

export class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            budgetPosts: [
                { id: 1, title: 'this is the title', value: 123, estimate: 321, subCards: null }
            ]
        };
    }

    updateFontsLoaded = boolean => {
        this.setState({
            fontsLoaded: boolean,
        })
    }

    render() {
        return (
            <MainContext.Provider value={{
                state: this.state,
                updateFontsLoaded: this.updateFontsLoaded,
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
import React, { Component } from "react";

MainContext = React.createContext('not initialized')

export const ContextConsumer = MainContext.Consumer
MainContext.Provider



export class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Loading
            fontsLoaded: false,
            loadingStage: 0.1,
            loadingDone: false,


            // Budget data
            budgetPosts: [
                { id: 1, title: 'this is context', value: 123, estimate: 321, subCards: null, percentage: 1 }
            ]
        };
    }

    updateFontsLoaded = boolean => {
        this.setState({
            fontsLoaded: boolean,
        })
    }

    updateLoadingStage = newValue => {
        this.setState({
            loadingStage: newValue,
        })
    }

    updateLoadingDone = boolean => {
        this.setState({
            loadingDone: boolean,
        })
    }

    render() {
        return (
            <MainContext.Provider value={{
                // All state
                state: this.state,

                // Loading
                updateFontsLoaded: this.updateFontsLoaded,
                updateLoadingStage: this.updateLoadingStage,
                updateLoadingDone: this.updateLoadingDone,
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
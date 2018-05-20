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
            budgetPosts: {
                'id1': { automatic: true, title: 'this is context', value: 3123213, estimate: 321, subCards: null, percentage: 0.1 },
                'id2': { automatic: true, title: 'this is context2', value: 123, estimate: 2, subCards: null, percentage: 0.2 },
                'id3': { automatic: true, title: 'this other', value: 1, estimate: 22222, subCards: null, percentage: 0.9 },
                'id4': { automatic: true, title: 'this other', value: 1, estimate: 22222, subCards: null, percentage: 0.9 },
                'id5': { automatic: true, title: 'this other', value: 1, estimate: 22222, subCards: null, percentage: 0.9 },
                'id6': { automatic: true, title: 'this other', value: 1, estimate: 22222, subCards: null, percentage: 0.9 },
            },

            transactions: {
                'id1': { title: 'transactions title', total: 121 },
                'id2': { title: 'transactions title 2', total: 122 },
                'id3': { title: 'transactions title 3', total: 123 },
                'id4': { title: 'transactions title 4', total: 124 },
                'id5': { title: 'transactions title 5', total: 125 },
                'id6': { title: 'transactions title 6', total: 126 },
            },
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

    updateBudgetPost = (id, newData) => {
        let budgetPosts = this.state.budgetPosts
        budgetPosts[id] = newData
        this.setState({
            budgetPosts,
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
                updateBudgetPost: this.updateBudgetPost,
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
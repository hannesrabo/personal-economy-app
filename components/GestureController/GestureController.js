import React from 'react'
import GestureRecognizer from 'react-native-swipe-gestures'
import NavigationService from '../../components/Navigation/NavigationService'

const config = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 80
}

export default class GestureController extends React.Component {

    _swipeDown = () => {
        if (this.props.swipeDownPath)
            NavigationService.navigate(this.props.swipeDownPath)
        else
            NavigationService.pop()
    }

    _swipeUp = () => {
        if (this.props.swipeUpPath)
            NavigationService.navigate(this.props.swipeUpPath)
    }

    render() {
        return (
            <GestureRecognizer
                // onSwipe={this.handleSwipe}
                onSwipeDown={this._swipeDown}
                onSwipeUp={this._swipeUp}
                config={config}
                style={{
                    flex: 1,
                    //height: '100%',
                    //backgroundColor: '#fff',
                    //borderWidth: 1,
                    borderColor: '#000000',
                }}
            >
                {this.props.children}
            </GestureRecognizer>
        )
    }
}

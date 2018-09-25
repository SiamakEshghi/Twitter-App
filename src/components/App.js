import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import * as actions from '../actions';

class App extends Component {
    state = {
        isHillary: true
    }

    handleOnClick = () => {
        const { isHillary } = this.state;
        this.props.setIsLoadedfalse();
        this.props.setTweets( isHillary ? 'realDonaldTrump' : 'HillaryClinton');
        this.setState({ 
            isHillary: !this.state.isHillary
        });
    }
    render(){
        const { isHillary } = this.state;
        const { tweets, isLoaded } =this.props;
        return (
            <div className="container">
                <button onClick={this.handleOnClick}>{isHillary ? 'Donald Tweets' : 'Hillary Tweets'}</button>
                <h1>{isHillary ? 'Hillary Clinton' : 'Donald Trump'}</h1>
                {isLoaded ? 
                    <ul>
                        {tweets.map((tweet, index) => <li key={index}>{tweet}</li>)}
                    </ul>
                 : <ReactLoading type="cylon" color="black"/>
                }
            </div>
        );
    }
}
const mapStateToProps = ({ reducer }) => {
    const { tweets, isLoaded } = reducer;
    return { tweets, isLoaded };
}
export default connect(mapStateToProps, actions)(App);
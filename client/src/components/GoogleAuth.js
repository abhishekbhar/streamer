import React from 'react';
import { connect} from 'react-redux';
import {signIn, signOut} from '../actions';



class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                client_id: '714676173302-vmsfnnhuitkhcd8kbtngrfo5orv1hutp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn ===null) {
            return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon" />Sign Out</button>;
        } else if (this.props.isSignedIn) {
            return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon" />Sign Out</button>;
        } else {
            return <button className="ui red google button" onClick={this.onSignInClick}><i className="google icon" />Sign In With Google</button>;
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}


const mapStateToProps = (state) =>{
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
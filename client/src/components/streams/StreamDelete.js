import React from 'react';
import {connect }   from 'react-redux';
import { fetchStream , deleteStream} from '../../actions';
import Modal from '../modal';
import history from '../../history';
import { Link } from 'react-router-dom';



class StreamDelete extends React.Component { 

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }


    renderActions(){
        return (
            <React.Fragment>
                <Link onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</Link>
                <Link to="/" className="ui button ">Cancel</Link>
            </React.Fragment>

        );
    }


    renderContent() {
        if(!this.props.stream){
            return "Are you sure you want to delete this stream ?";
        }
        return `Are you sure you want to delete the stream with title "${this.props.stream.title}"?`;
    }
    render(){


        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() =>{history.push('/')}}
            />
        );
    }
      
}



const mapStateToProps = (state, ownProps) => {
    return { stream:state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
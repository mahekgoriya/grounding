import React, { Component } from 'react';
class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            year: this.props.year,
            photo: this.props.photo,
            likeCount:0,
            disLikeCount:0
        }
    }
    updatelikecount=()=>
    {
        console.log('hello');
        this.setState({
        likeCount:this.state.likeCount+1
    })
    }
    updatedislikecount=()=>
    {
        console.log('hello');
        this.setState({
        disLikeCount:this.state.disLikeCount+1
    })
    }
    render() {
        return (
            <div className="col-3 mt-5">
                <div className="card text-center">
                    <div className='card-header'>
                        <h3>{this.state.name}</h3>
                        <h5 className='mt-3'>{this.state.year}</h5>
                    </div>
                    <div className='card-body text-center'>
                        <img src={this.state.photo} className='img-fluid' />
                    </div>
                    <div className='card-footer d-flex justify-content-around'>
                        <button className='btn btn-primary mx-2' onClick={this.updatelikecount}>Like {this.state.likeCount}</button>
                        <button className='btn btn-primary mx-2' onClick={this.updatedislikecount}>Dislike{this.state.disLikeCount}</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;
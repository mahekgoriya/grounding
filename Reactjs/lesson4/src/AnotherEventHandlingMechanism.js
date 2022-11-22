import React, { Component } from "react";
class EventHandelingTechnique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: 0,
            label: "Like",
        };
        this.ChangeLabel = this.ChangeLabel.bind(this);
    }
    ChangeLabel() {
        this.state.isLike = !this.state.isLike;
        // console.log(this.state.isLike);
        if (this.state.isLike == true) {
            this.setState({
                label: "Liked",
            });
        } else {
            this.setState({
                label: "Like",
            });
        }
    }
    ShareDetail(id, name) {
        console.log(id, name);
    }
    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Facebook Post</h3>
                    </div>
                    <div className="card-body">
                        <img src="https://picsum.photos/300" className="img-fluid" />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary mx-2" onClick={this.ChangeLabel}>
                            {this.state.label}
                        </button>
                        <button
                            className="btn btn-info"
                            onClick={()=>this.ShareDetail(1, "Mahek")}
                        >
                            Share
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default EventHandelingTechnique;

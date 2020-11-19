import Axios from 'axios';
import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: [],
        }
    }


    componentDidMount() {
        const Url = 'https://panorbit.in/api/users.json';
        Axios
        .get(Url)
        .then(res => {
            console.log(res.data.users[0]);
            this.setState({
              userDetail: res.data.users[0],
            });
        })
        .catch(err => console.log(err));

}


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                       <section className="main-container">
                            <div className="flex-container-f">
                                <div className="title">Gallery</div>
                                <div className="profile-name pull-right">
                                    <img src={this.state.userDetail.profilepicture} className="img img-circle pro-pic" alt="pic" />
                                    <p className="p-text"> {this.state.userDetail.name} </p>                            
                                </div>                  
                            </div>
                        </section>
                </div>
            </div>
        )
}
}
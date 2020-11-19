import React, { Component } from 'react';
import banner from './banner.svg';
import border from './border.svg';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bret from './components/Bret';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount() {
        const apiUrl = 'https://panorbit.in/api/users.json';
        Axios
        .get(apiUrl)
        .then(res => {
            console.log(res.data.users);
            this.setState({
              user: res.data.users,
            });
        })
        .catch(err => console.log(err));

}

render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="banner1">
              <img src={banner} width="100%" className="f-banner" />
              <img src={border} width="100%" className="f-border" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel u-panel">
              <div className="panel-heading f-heading">
                <h1 className="panel-title f-title">Select an account</h1>
              </div>
              <div className="panel-body f-body">
                  {
                    this.state.user.map((item) => {
                        return(
                      <ul className="list-group f-ul" key={item.id}>
                          <li className="list-group-item myitem">
                            <Link to={`/users/${item.username}`}>
                            {/* <a href="/bret"> */}
                              <div className="profile-name">
                                  <img src={item.profilepicture} className="img img-circle pro-pic" alt="pic" />
                                  <p className="f-text"> { item.name } </p>
                              </div>
                              {/* </a> */}
                            </Link> 
                          </li>
                      </ul>

                        )
                    })
                  }
                </div> 
                {/* <a href="/bret">Bret</a> */}

              </div>
            </div>
          </div>
        </div>
    
    )
  }
  }
  





 




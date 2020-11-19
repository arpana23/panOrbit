import React, { Component } from 'react';

import Gallery from '../sub/Gallery';
import Posts from '../sub/Posts';
import Profile from '../sub/Profile';
import Todo from '../sub/Todo';
import './Bret.css';


export default class Bret extends Component {

    render() {
        return (
           <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <ul class="nav nav-pills nav-stacked b-nav">
                            <li className="active" className="p1 common"><a data-toggle="tab" href="#profile">Profile</a></li>
                            <li><a data-toggle="tab"  className="p2 common"href="#posts">Posts</a></li>
                            <li><a data-toggle="tab"  className="p3 common"href="#gallery">Gallery</a></li>
                            <li><a data-toggle="tab"  className="p4 common"href="#todo">Todo</a></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <div class="tab-content b-content">
                            <div id="profile" class="tab-pane fade in active">
                                <Profile />
                            </div>
                            <div id="posts" class="tab-pane fade">
                                <Posts />
                            </div>
                            <div id="gallery" class="tab-pane fade">
                                <Gallery />
                            </div>
                            <div id="todo" class="tab-pane fade">
                                <Todo />
                            </div>
                        </div>
                    </div>
            
                </div>
           </div>
        )
    }
}

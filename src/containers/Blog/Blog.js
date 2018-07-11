import React, { Component } from 'react';
// import axios from 'axios';

import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';


const AsycnNewPost = asyncComponent(() => {
    //dynamic sytax, it means that import will execute only when anonymous () function will executed
    // and the function will be executed once we rendered AscynNewPost component to the screen
    return import('./NewPost/NewPost');
}); 

class Blog extends Component {
    state = {
        auth: true
    }
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts" 
                                exact 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                    <Switch>
                        {this.state.auth ? <Route path="/new-post" component={AsycnNewPost} /> : null}
                        <Route path="/posts" component={Posts} />
                        <Route render={() => <h1>Not found</h1>}/>
                        {/*<Redirect from="/" to="/posts" />*/}
                        {/* use "from" in Redirect component only inside Switch component, in other situation only use "to" */}
                    </Switch>
                </header>
            </div>
        );
    }
}

export default Blog;
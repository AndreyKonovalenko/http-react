import React, { Component } from 'react';
import axios_instance from '../../../axios';
import Post from '../../../components/Post/Post';
//import {Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios_instance.get('/posts')
            .then(response => {
                console.log(response);
                const my_posts = response.data.slice(0 , 4); 
                const updatedPost = my_posts.map(element => {
                    return {
                        ...element,
                        auther:'Max'
                    }
                });
                this.setState({posts: updatedPost});
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
       // this.setState({selectedPostId: id});
       console.log("programatical navigation");
       this.props.history.push({pathname: '/posts/' + id});
    }

    render () {
        let postsData = <p style={{textAlign: 'center'}}>Somthing went wrong!</p>
        if (!this.state.error) {
            postsData = this.state.posts.map(element=>{
                return (
                   // <Link to={'/' + element.id}  key={element.id}>
                        <Post
                            key={element.id}
                            title={element.title} 
                            author={element.auther} 
                            clicked={() => this.postSelectedHandler(element.id)}/>
                 //   </Link>
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {postsData}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;

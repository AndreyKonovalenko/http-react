import React, { Component } from 'react';
import axios_instance from '../../../axios';
import Post from '../../../components/Post/Post';
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
        this.setState({selectedPostId: id});
    }

    render () {
        let postsData = <p style={{textAlign: 'center'}}>Somthing went wrong!</p>
        if (!this.state.error) {
            postsData = this.state.posts.map(element=>{
                return <Post 
                    title={element.title} 
                    author={element.auther} 
                    key={element.id}
                    clicked={() => this.postSelectedHandler(element.id)}/>
            });
        }
        return (
            <section className="Posts">
                {postsData}
            </section>
        );
    }
}

export default Posts;

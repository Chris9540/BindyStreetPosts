import React, { Component } from 'react';
import Post from './Post';
export class Posts extends Component {
    static displayName = Posts.name;

    state = {
        posts: [],
        loading: true,

    }

    componentDidMount() {
        this.populatePostsData();
    }


    render() {
        const { posts, loading } = this.state
        return (
            <div>
                {loading ? <em>Loading...</em> :
                    <div>
                        {posts.map((post, index) => {
                            const { userId, id, title, body } = post;
                            return (
                                <Post key={index} userId={userId} postId={id} postTitle={title} postBody={body} />
                            );
                        })}
                    </div> 
                }
            </div>
        );
    }


    async populatePostsData() {
        const response = await fetch('blogposts');
        const data = await response.json();
        this.setState({ posts: data, loading: false });

    }


}
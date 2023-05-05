import React from 'react';
import { useState } from 'react';

import meowed from '../assets/img/meowed.svg';
import meowedPost from '../assets/img/gato-telefone.svg';
import barked from '../assets/img/barked.svg';
import barkedPost from '../assets/img/dog.svg';
import respondeai from '../assets/img/respondeai.svg';
import adorable_animals from '../assets/img/adorable_animals.svg';
import ellipsis from '../assets/img/ellipsis-horizontal.svg';
import chat from '../assets/img/chatbubble-outline.svg';
import plane from '../assets/img/paper-plane-outline.svg';

const posts = [
    [meowed, 'meowed', meowedPost, respondeai, 'respondeai'],
    [barked, 'barked', barkedPost, adorable_animals, 'adorable_animals']
];

const postsData = [...posts, ...posts].map((post, index) => (
    {
        imgUrl: post[0],
        user: post[1],
        imgPost: post[2],
        imgUserLike: post[3],
        userNameLike: post[4],
        numberOfLikes: Math.ceil(Math.random() * 1000),
        id: index,
        liked: false,
    }
));
// -----------------------------
// Components:

const PostHead = ({ imgSrc, author }) => {
    return (
        <div className="post-head">
            <div className="left">
                <img src={imgSrc} alt="post-author" style={{ width: "32px", height: "32px" }} />
                <h1 className="post-author">{author}</h1>
            </div>
            <img src={ellipsis} alt="more-options" className='ion-icon' />
        </div>
    );
};

const PostImg = ({ imgPost, postId, isLiked, setPostsState }) => {
    const [dbClickLike, setDbClickLike] = useState('hidden');
    const handleLikeImg = (id) => {
        if (isLiked) return;
        setDbClickLike('');
        setTimeout(() => {
            setDbClickLike('hidden');
        }, 500);
        setPostsState(prevState => (
            prevState.map(post => {
                if (post.id === id) {
                    post.numberOfLikes++;
                    post.liked = true;
                }
                return post;
            })
        ))
    };

    return (
        <div className="post-img">
            <img
                src={imgPost}
                alt="post-img"
                onDoubleClick={() => handleLikeImg(postId)}
                data-test="post-image"
                style={{ cursor: "pointer" }}
            />
            <div className={`animation ${dbClickLike}`}>
                <ion-icon name="heart"></ion-icon>
            </div>
        </div>
    );
};

const PostFooter = ({ nameUserLike, imgUserLike, numberOfLikes, postId, isLiked, setPostsState }) => {
    const [savePost, setSavePost] = useState('bookmark-outline');

    const handleLikeHeart = (id) => {
        setPostsState(prevState => {
            return prevState.map(post => {
                if (post.id === id) {
                    isLiked ? post.numberOfLikes-- : post.numberOfLikes++;
                    post.liked = !isLiked;
                }
                return post;
            })
        })
    };

    return (
        <div className="post-footer">
            <div className="actions">
                <div className="left">
                    <ion-icon
                        className="heart-like"
                        name={isLiked ? 'heart' : 'heart-outline'}
                        style={isLiked ? { color: 'red' } : {}}
                        onClick={() => handleLikeHeart(postId)}
                        data-test="like-post"
                    ></ion-icon>
                    <img src={chat} alt="comment" className='ion-icon' />
                    <img src={plane} alt="share" className='ion-icon' />
                </div>
                <div className="right">
                    <ion-icon
                        name={savePost}
                        onClick={
                            () => savePost === 'bookmark'
                                ? setSavePost('bookmark-outline')
                                : setSavePost('bookmark')
                        }
                        data-test="save-post"
                    ></ion-icon>
                </div>
            </div>
            <div className="info-likes">
                <img src={imgUserLike} alt="likes" className='ion-icon' />
                <h4
                    style={{
                        fontWeight: 300,
                        fontSize: '14px',
                        color: '#000'
                    }}
                >
                    Curtido por <span className='strong'>
                        {nameUserLike}
                    </span> e <span className='strong'>
                        outras <span data-test="likes-number">
                            {numberOfLikes} </span> pessoas
                    </span>
                </h4>
            </div>
        </div>
    );
}

const Posts = () => {
    const [postsState, setPostsState] = useState(postsData);

    return (
        <div className='posts'>
            {postsState.map((post) => (
                <div className="post" key={`post-${post.id}`} data-test="post">
                    <PostHead imgSrc={post.imgUrl} author={post.user} />
                    <PostImg
                        imgPost={post.imgPost}
                        postId={post.id}
                        isLiked={post.liked}
                        setPostsState={setPostsState}
                    />
                    <PostFooter
                        nameUserLike={post.userNameLike}
                        imgUserLike={post.imgUserLike}
                        numberOfLikes={post.numberOfLikes}
                        postId={post.id}
                        isLiked={post.liked}
                        setPostsState={setPostsState}
                    />
                </div>
            ))}
        </div>
    )
}

export default Posts;
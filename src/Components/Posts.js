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
    }
));
// -----------------------------
// Components:
const Post = ({ userImgUrl, author, imgPost, imgUserLike, nameUserLike, numberOfLikes }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDbClick, setIsDbClick] = useState(false);
    const [heartIcon, setHeartIcon] = useState('heart-outline');
    const [savePost, setSavePost] = useState('bookmark-outline');
    const [nLikes, setNLikes] = useState(numberOfLikes);

    const handleLike = (dbClick = false) => {
        if (dbClick && isLiked) return;
        if (isLiked) {
            setNLikes(prevState => prevState - 1);
            setHeartIcon('heart-outline');
            setIsLiked(false);
        } else {
            setNLikes(prevState => prevState + 1);
            setHeartIcon('heart');
            setIsLiked(true);
            if (dbClick) {
                setIsDbClick(true);
                setTimeout(() => {
                    setIsDbClick(false);
                }, 500);
            }
        };
    };

    return (
        <>
            <div className="post-head">
                <div className="left">
                    <img src={userImgUrl} alt="post-author" style={{ width: "32px", height: "32px" }} />
                    <h1 style={{
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#262626',
                    }}>{author}</h1>
                </div>
                <img src={ellipsis} alt="more-options" className='ion-icon' />
            </div>
            <div className="post-img">
                <img
                    src={imgPost}
                    alt="post-img"
                    onDoubleClick={() => handleLike(true)}
                    data-test="post-image"
                    className='post-img'
                />
                {isDbClick && <div className='animation'>
                    <ion-icon name="heart"></ion-icon>
                </div>}
            </div>
            <div className="post-footer">
                <div className="actions">
                    <div className="left">
                        <ion-icon
                            name={heartIcon}
                            style={isLiked ? { color: 'red' } : { color: 'black' }}
                            onClick={() => handleLike()}
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
                                {nLikes} </span> pessoas
                        </span>
                    </h4>
                </div>
            </div>
        </>
    );
};

const Posts = () => {

    return (
        <div className='posts'>
            {postsData.map((post) => (
                <div className="post" key={`post-${post.id}`} data-test="post">
                    <Post
                        userImgUrl={post.imgUrl}
                        author={post.user}
                        imgPost={post.imgPost}
                        imgUserLike={post.imgUserLike}
                        nameUserLike={post.userNameLike}
                        numberOfLikes={post.numberOfLikes}
                    />
                </div>
            ))}
        </div>
    )
}

export default Posts;
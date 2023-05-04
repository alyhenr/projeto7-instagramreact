import React from 'react'

import meowed from '../assets/img/meowed.svg';
import meowedPost from '../assets/img/gato-telefone.svg';
import barked from '../assets/img/barked.svg';
import barkedPost from '../assets/img/dog.svg';
import respondeai from '../assets/img/respondeai.svg';
import adorable_animals from '../assets/img/adorable_animals.svg';
import ellipsis from '../assets/img/ellipsis-horizontal.svg';
import chat from '../assets/img/chatbubble-outline.svg';
import plane from '../assets/img/paper-plane-outline.svg';

const Posts = () => {

    const posts = [
        [meowed, 'meowed', meowedPost, respondeai, 'respondeai'],
        [barked, 'barked', barkedPost, adorable_animals, 'adorable_animals']
    ];

    const handleLike = (ev, nLikes, ImgClick) => {
        const setLike = (element) => {
            if (element.name === "heart-outline") {
                element.name = "heart";
                element.setAttribute("style", "color: red");
                document.querySelector(`#${nLikes}`).textContent++;
                if (ImgClick) {
                    console.log(ev.target.parentNode)
                    ev.target.parentNode.querySelector(".animation").classList.remove("hidden");
                    setTimeout(() => {
                        ev.target.parentNode.querySelector(".animation").classList.add("hidden");
                    }, 500);
                }

            } else {
                element.name = "heart-outline";
                element.setAttribute("style", "color: black");
                document.querySelector(`#${nLikes}`).textContent--;
            }
        };

        const element = ImgClick
            ? ev.target.parentNode.nextSibling.querySelector('[className="heart-like"]')
            : ev.target

        if (ImgClick && element.name === "heart") return;
        setLike(element);
    }

    const handleSavePost = ev => {
        if (ev.currentTarget.name === "bookmark-outline") {
            ev.currentTarget.name = "bookmark";
        } else {
            ev.currentTarget.name = "bookmark-outline";
        }
    }

    return (
        <div className='posts'>
            {[...posts, ...posts].map((post, index) => (
                <div className="post" key={`post-${index}`} data-test="post">
                    <div className="post-head">
                        <div className="left">
                            <img src={post[0]} alt="post-author" style={{ width: "32px", height: "32px" }} />
                            <h1 className="post-author">{post[1]}</h1>
                        </div>
                        <img src={ellipsis} alt="more-options" className='ion-icon' />
                    </div>
                    <div className="post-img">
                        <img
                            src={post[2]}
                            alt="post-img"
                            onDoubleClick={(ev) => handleLike(ev, `likes-${index}`, true)}
                            data-test="post-image"
                            style={{ cursor: "pointer" }}
                        />
                        <div className="animation hidden">
                            <ion-icon name="heart"></ion-icon>
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="actions">
                            <div className="left">
                                <ion-icon
                                    className="heart-like"
                                    name="heart-outline"
                                    onClick={(ev) => handleLike(ev, `likes-${index}`)}
                                    data-test="like-post"
                                ></ion-icon>
                                <img src={chat} alt="comment" className='ion-icon' />
                                <img src={plane} alt="share" className='ion-icon' />
                            </div>
                            <div className="right">
                                <ion-icon
                                    name="bookmark-outline"
                                    onClick={(ev) => handleSavePost(ev)}
                                    data-test="save-post"
                                ></ion-icon>
                            </div>
                        </div>
                        <div className="info-likes">
                            <img src={post[3]} alt="likes" className='ion-icon' />
                            <h4>
                                Curtido por <span className='strong'>
                                    {post[4]}
                                </span> e <span className='strong'>
                                    outras <span id={`likes-${index}`} data-test="likes-number">
                                        {Math.ceil((Math.random() * 10000))} </span>
                                    pessoas
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts
import React, {useState, useEffect, Fragment} from 'react';
import {getRandomPost} from "../helpers/helperFunctions";
import Navigation from "../Blocks/Navigation";

const Main = props => {

    const [post, setPost] = useState('');

    useEffect(() => {
        setPost(getRandomPost());
    },[]);

    const srcPath = "../images/content/";

    return (
        <div
            className='container main'
            // style={{backgroundImage: "url(../images/content/main.jpg)"}}
        >
            {post?
                <Fragment >
                    <div className='main__promo'>
                        <h3 className='main__title'>{post.title}</h3>
                        <p className='main__text'>{post.text}</p>
                    </div>
                    <div className='main__about'>
                        <div className='flex--between'>
                            <div>
                                By <span className='main__author'>{post.author}</span>
                            </div>
                            <div className='main__date'>{post.date}</div>
                        </div>
                        <div className='main__likes__wrap'>
                            <img className='main__users' src={srcPath+post.likes[0].avatar} alt="user"/>
                            <img className='main__users' src={srcPath+post.likes[1].avatar} alt="user"/>
                            <span className='main__likes'>+{post.likes.length - 2}</span>
                            <span>Liked this</span>
                        </div>
                    </div>
                </Fragment> : null
            }
            <Navigation />
        </div>
    );
};

export default Main;

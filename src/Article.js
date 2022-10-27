import React from "react";
import './_article.scss';
import avatar from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
import fb from './images/icon-facebook.svg';
import pin from './images/icon-pinterest.svg';
import tw from './images/icon-twitter.svg';
export default function Article(){
    
    function handleClick(event){
        event.currentTarget.classList.toggle('clicked');
    }
    return(
        
        <div className="content">
            <div className="container">
              
                    <div className="row">
                        <div className="col-sm-5 content__picture"></div>
                        <div className="col-sm-7 content__text">
                            <h5>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h5>
                        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                        <div className="content__contacts">
                            <div className="content__contacts-icon"><img src={avatar} alt="woman avatar"/></div>
                            <div className="content__contacts-info">
                                <p className="content__contact-info--name">Michelle Appleton</p>
                                <p className="content__contact-info--date">28 Jun 2020</p>
                            </div>
                            <div className="content__contacts-share" onClick={handleClick}>
                                
                                <img src={share} alt="share icon"/>
                            <div className="triangle"></div>
                            <div className="share-option">
                            <span>SHARE</span>
                            <img src={fb} alt="share"/>
                            
                            <img src={tw} alt="share"/>
                            <img src={pin} alt="share"/>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
            </div>
            </div>
        
    );
}
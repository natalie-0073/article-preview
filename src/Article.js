import React from "react";
import './_article.scss';
import avatar from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
export default function Article(){
    return(
        // <main>
            <div className="container">
                {/* <div className="content"> */}
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
                            <div className="content__contacts-share"><img src={share} alt="share icon"/></div>
                        </div>
                        </div>
                    </div>
                    {/* </div> */}
            </div>
        // </main>
    );
}
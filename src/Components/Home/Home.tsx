import React, { useState } from 'react';
import './Home.css';
import { HomeProps } from '../../Types/Types';
import homeCard1 from '../../illustration/homeCard1.jpg';
import homeCard2 from '../../illustration/homeCard2.jpg';
import homeCard3 from '../../illustration/homeCard3.jpg';
import avatar7 from "../../illustration/avatar 7.svg";
import GoogleLogo from "../../illustration/GoogleLogo.svg"
import { CgArrowLongRight } from "react-icons/cg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { TiStarFullOutline } from "react-icons/ti";
import Reviews from "../../Reviews.json";
import Nav from '../NavBars/Nav';

const Home: React.FC<HomeProps> = (displayControl) => {
    
    let [reviewNumber, setReviewNumber] = useState<number>(0);

    const nextReview = () => {

        setReviewNumber(reviewNumber === Reviews.length - 1? 0 : reviewNumber + 1 )

    }

    const prevReview = () => {

        setReviewNumber(reviewNumber < 1? Reviews.length - 1 : reviewNumber - 1)
    }

    


    return (
        <div className="homeHead">
            <div className="homeIllustration">
                <Nav mobNav={displayControl.mobNav} setmobNav={displayControl.setmobNav}/>

                <div className="homeHeading ">
                    <h1 className=" text-center">You move out, we clean up</h1>
                    <h4 className=" mt-3 text-center">The simplest way to get your bond back. Guaranteed.*</h4>
                </div>

                <div className="avatar" ><img src={avatar7} alt="" /></div>
            </div>

            <div className="secHomeText">
                <h2 className="text-center">Our Services</h2>
                <p className="text-center">Dependable, professional, and experienced. Choose from any
                    of our cleaning services and we'll handle the rest</p>
            </div>

            <div id="cards">
                <div id="card1" className="cardBody" >
                    <img src={homeCard1} alt="card1" />
                    <div className="cardText">
                        <h5 className="">Card title</h5>
                        <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" >Learn more<CgArrowLongRight className="ms-3 fs-5" /></a>
                    </div>
                </div>

                <div id="card2" className="cardBody" >
                    <img src={homeCard2} alt="card1" />
                    <div className="cardText">
                        <h5 className="">Card title</h5>
                        <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" >Learn more<CgArrowLongRight className="ms-3 fs-5" /></a>
                    </div>
                </div>

                <div id="card3" className="cardBody" >
                    <img src={homeCard3} alt="card1" />
                    <div className="cardText">
                        <h5 className="">Card title</h5>
                        <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" >Learn more<CgArrowLongRight className="ms-3 fs-5" /></a>
                    </div>
                </div>
            </div>

            <div className="reviews" >
                <h2>Our Reviews</h2>
                <p>We believe our work speaks for itself, but our customer vounch for us too.
                    Here's just a few of the reviews that make up our <a href="/" >4.9 star rating</a> on <img className="googleLogo" src={GoogleLogo} alt="GoogleLogo" />
                </p>
            </div>

            <div className="publicReviews">

                <div className="prev">
                    <FcPrevious onClick={prevReview} type="button" /> 
                </div> 

                <div className="reviewsList">
                    <div className="reviewsListBio">
                        <img src={Reviews[reviewNumber].Image} alt="" />
                        <h1>{Reviews[reviewNumber].Name}</h1>
                    </div>

                    <div className="reviewsListReview">
                        <p>{Reviews[reviewNumber].Description}</p>
                        <div className="reviewStars">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                    </div>
                </div>
                
                <div className="next">
                    <FcNext onClick={nextReview} type="button" />
                </div>

            </div>

        </div>
    )
}

export default Home;

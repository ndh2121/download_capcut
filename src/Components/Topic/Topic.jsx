import React from "react";
import "./Topic.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topic = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
    };
    return (
        <section className="lsjcowijdw">
            <div className="ojwocjdlcks">
                <div className="ojwcojkcskl">
                    <h2 className="jocwjkld">
                        <span>More topics you may like</span>
                    </h2>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724403583758.525~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        The 5 Best Free Meme Makers: Easy to
                                        Customize Funny Templates
                                    </h3>
                                </a>
                            </div>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724403395620.524~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        Effortlessly Make Memes Online for Free
                                        | Go Viral with Humorous Content
                                    </h3>
                                </a>
                            </div>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724404343295.526~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        Use Kapwing Meme Maker Effectively:
                                        Convert Your Ideas into Laughter
                                    </h3>
                                </a>
                            </div>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724393642167.513~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        How to Make Cartoon Videos | Create Your
                                        Own Story
                                    </h3>
                                </a>
                            </div>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724385771149.509~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        How to Make Animation Videos Like a Pro
                                        in Easy Steps
                                    </h3>
                                </a>
                            </div>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724400565300.518~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        Easy Ways to Remove People from Pictures
                                        | A Beginner’s Guide
                                    </h3>
                                </a>
                            </div>
                            <div className="lkowiurlksc">
                                <a href="#" className="jjoiujowjf">
                                    <div className="jocwjcoisjc">
                                        <img
                                            src="https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/1724120229103.478~tplv-6rr7idwo9f-image.image"
                                            alt="photo"
                                            className="cojkwoilk"
                                        />
                                    </div>
                                    <h3 className="oicjsojkl">
                                        Expert Guide to Employ Descript AI Voice
                                        | Communicate Effectively
                                    </h3>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topic;

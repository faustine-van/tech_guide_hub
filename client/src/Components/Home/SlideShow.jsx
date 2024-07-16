import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SlideShow.css'; // Import your custom CSS file

const MyCarousel = () => {
    const items = [
        {
            id: 1,
            image: '/Default_developer_or_tech_entusiast_3.jpg',
            box: {
                heading: 'Scholarships',
                buttonLabel: 'Explore Scholarships',
                content: 'Apply for our annual scholarship program to get financial support for your studies.'
            },
        },
        {
            id: 2,
            image: '/Default_tech_world_0.jpg',
            box: {
                heading: 'Online Courses',
                buttonLabel: 'Explore Online Courses',
                content: 'Enhance your skills with our comprehensive online courses available in various domains.'
            },
        },
        {
            id: 3,
            image: '/Default_look_good_3.jpg',
            box: {
                heading: 'Events',
                buttonLabel: 'Explore Events',
                content: 'Stay updated with the latest industry events and workshops.'
            },
        },
        {
            id: 4,
            image: '/Default_websites_for_event_designs_zoomwebnar_for_inspiration_3.jpg',
            box: {
                heading: 'Mentorship Program',
                buttonLabel: 'Explore Mentorship Programs',
                content: 'Get guidance from experienced professionals through our mentorship program.'
            },
        },
        {
            id: 5,
            image: '/Default_website_for_A_professional_background_image_showcasing_3.jpg',
            box: {
                heading: 'Internships',
                buttonLabel: 'Explore Internships',
                content: 'Apply for internships to gain practical experience and kickstart your career.'
            },
        },
    ];

    const customArrowPrev = (clickHandler) => (
        <button className="custom-prev-arrow" onClick={clickHandler}>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
        </button>
    );

    const customArrowNext = (clickHandler) => (
        <button className="custom-next-arrow" onClick={clickHandler}>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
        </button>
    );

    return (
        <div className="carousel-container">
            <Carousel
                className="sliding"
                interval={3000}
                // renderArrowPrev={customArrowPrev}
                // renderArrowNext={customArrowNext}
               
                showArrows={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                swipeable={true}
                showThumbs={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = {
                        marginLeft: 20,
                        color: "white",
                        cursor: "pointer",
                        display: "inline-block",
                    };
                    return (
                        <span style={defStyle} onClick={onClickHandler} role="button">
                            <hr
                                style={{
                                    width: "40px",
                                    height: "4px",
                                    borderRadius: "10px",
                                    backgroundColor: isSelected
                                        ? "rgb(33, 92, 131)"
                                        : "#cedaf2",
                                    border: "none",
                                    margin: "0 auto",
                                }}
                            />
                        </span>
                    );
                }}
            >
                {items.map(item => (
                    <div key={item.id} className="slide-show" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="overlay">
                        <p className="hero-paragraph">
                                {item.box.heading}
                            </p>
                            <h1 className="hero-heading">{ item.box.content}</h1>
                            
                            <Link to="/" className="hero-button">
                                {item.box.buttonLabel}
                                <svg className="hero-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel;

import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SlideShow.css'; // Import your custom CSS file

const MyCarousel = () => {
    const items = [
        {
            id: 1,
            box: {
                heading: 'Scholarships',
                buttonLabel: 'Explore',
                content: 'Apply for our annual scholarship program to get financial support for your studies.'
            },
        },
        {
            id: 2,
            box: {
                heading: 'Online Courses',
                buttonLabel: 'Explore',
                content: 'Enhance your skills with our comprehensive online courses available in various domains.'
            },
        },
        {
            id: 3,
            box: {
                heading: 'Events',
                buttonLabel: 'Explore',
                content: 'Stay updated with the latest industry events and workshops.'
            },
        },
        {
            id: 4,
            box: {
                heading: 'Mentorship Program',
                buttonLabel: 'Explore',
                content: 'Get guidance from experienced professionals through our mentorship program.'
            },
        },
        {
            id: 5,
            box: {
                heading: 'Internships',
                buttonLabel: 'Explore',
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
                renderArrowPrev={customArrowPrev}
                renderArrowNext={customArrowNext}
                showArrows={true}
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
                                    height: "4px", // Changed height to 2px
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

                    <div key={item.id} className="item">
                        <br />
                        <h1>{item.box.heading}</h1>
                        <p>
                            {item.box.content}
                        </p>
                        <br />
                        <Link to="/" className="hero-button">
                            {item.box.buttonLabel}
                            <svg className="hero-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>

                    </div>


                ))}

            </Carousel>
        </div>
    );
};

export default MyCarousel;

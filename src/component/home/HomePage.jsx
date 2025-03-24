import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
    const [roomSearchResult, setRoomSearchResult] = useState([]);

    //function to handle search result
    const handleSearchResult = (results) => {
        setRoomSearchResult(results);
        console.log("RESULT IS: " + results)
    }

    // Inline styles
    const styles = {
        headerBanner: {
            position: 'relative',
            height: '600px',
            overflow: 'hidden'
        },
        headerImage: {
            width: '100%',
            // height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top' // This focuses on the upper part of the image
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
        },
        overlayContent: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            width: '100%',
            padding: '0 20px'
        }
    };

    return(
        <div className="home">
            <section>
                <header className="header-banner" style={styles.headerBanner}>
                    <img src="./images/bg.jpg" alt="Hotel" className="header-image" style={styles.headerImage} />
                    <div className="overlay" style={styles.overlay}></div>
                    <div className="animated-texts overlay-content" style={styles.overlayContent}>
                        <h1>Welcome to <span className="phegon-color">DipLux Hotel</span></h1>
                        <h3>Step into a haven of comfort and care</h3>
                    </div>
                </header>
            </section>

            <RoomSearch handleSearchResult={handleSearchResult}/>
            <RoomResult roomSearchResults={roomSearchResult}/>

            <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

            <h2 className="home-services">Services at <span className="phegon-color">DipLux Hotel</span></h2>

            {/* SERVICES SECTION */}
            <section className="service-section">
                <div className="service-card">
                    <img src="./images/ac.png" alt="Air Conditioning" />
                    <div className="service-details">
                        <h3 className="service-title">Air Conditioning</h3>
                        <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./images/mini-bar.png" alt="Mini Bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./images/parking.png" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./images/wifi.png" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
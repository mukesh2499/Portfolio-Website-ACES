import React from 'react'
import first from "../assets/gallery-1.jpg"
import second from "../assets/gallery-2.jpg"
import third from "../assets/gallery-3.jpg"
import fourth from "../assets/gallery-4.jpg"
import fifth from "../assets/gallery-5.jpg"

function Gallery() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" style={{borderRadius: "0%"}}>
                <h1 id="gallery">Gallery</h1>
                <div className="carousel-item active">
                <img src={second} className="d-block w-5" alt="something"/>
                </div>
                <div className="carousel-item">
                <img src={first} className="d-block w-5" alt="something"/>
                </div>
                <div className="carousel-item">
                <img src={third} className="d-block w-5" alt="something"/>
                </div>
                <div className="carousel-item">
                <img src={fourth} className="d-block w-5" alt="something"/>
                </div>
                <div className="carousel-item">
                <img src={fifth} className="d-block w-5" alt="something"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery

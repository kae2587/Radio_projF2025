import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Landing() {
  // Clean YouTube IDs
  const videos = [
    "RYZtKVXKrc4",
    "CxketvKmU2s",
    "JRW2GG6edY8",
    "yzmy7qwbVVI",
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "40px 20px"
      }}
    >
      
      <h1
        style={{
          fontFamily: "inherit",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "25px",
          textAlign: "center",
          color: "#111"
        }}
      >
        UCLA Radio
      </h1>

     
      <div
        style={{
          width: "90%",
          maxWidth: "700px",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)"
        }}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
        >
          {videos.map((id, index) => (
            <SwiperSlide key={index}>
              <iframe
                width="100%"
                height="380"
                src={`https://www.youtube.com/embed/${id}`}
                title={`video-${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "14px",
                  border: "none",
                  width: "100%"
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.1rem",
          color: "#444",
          maxWidth: "650px",
          textAlign: "center"
        }}
      >
        Broadcasting creativity, culture, and community from the heart of UCLA.  
        Tune in to the latest videos, interviews, and student-led content.
      </p>
    </div>
  );
}

export default Landing;

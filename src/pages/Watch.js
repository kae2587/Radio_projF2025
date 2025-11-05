import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // keep your Firebase setup
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Watch() {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyCfHvbB77fiQfJXf86mdNVdXRuLufYkYkU"; // 🔑 replace with your YouTube Data API v3 key
  const UPLOADS_PLAYLIST_ID = "UUMu1h2vTKPOgWY9YUY--F_Q";

  useEffect(() => {
    const testConnection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        console.log("✅ Firebase connected! Docs in 'test':");
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.error("❌ Firebase connection failed:", error);
      }
    };
    testConnection();

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=10&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          setVideos(data.items);
        } else {
          console.error("No videos found:", data);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <Link to="/">Back to home</Link>

      <h2 style={{ marginTop: "2rem" }}>Featured YouTube Videos</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {videos.length > 0 ? (
          videos.map((video) => (
            <iframe
              key={video.snippet.resourceId.videoId}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))
        ) : (
          <p>Loading latest videos...</p>
        )}
      </div>
    </div>
  );
}

export default Watch;

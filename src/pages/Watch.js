import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // keep your Firebase setup
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Watch() {
  const [videos, setVideos] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
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

    const getVideoStats = async (videoId) => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      return data.items[0].statistics;
    };

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=10&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
            const videosWithStats = await Promise.all(data.items.map(async (video) => {
                return {
                    ...video,
                    statistics: await getVideoStats(video.snippet.resourceId.videoId)
                };
            }));
            setVideos(videosWithStats);
        } else {
          console.error("No videos found:", data);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Sort videos based on selected criteria
  const sortedVideos = [...videos].sort((a, b) => {
    switch (sortOrder) {
      case "newest":
        return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
      case "oldest":
        return new Date(a.snippet.publishedAt) - new Date(b.snippet.publishedAt);
      case "viewsHighToLow":
        return parseInt(b.statistics?.viewCount || 0) - parseInt(a.statistics?.viewCount || 0);
      case "viewsLowToHigh":
        return parseInt(a.statistics?.viewCount || 0) - parseInt(b.statistics?.viewCount || 0);
      case "likesHighToLow":
        return parseInt(b.statistics?.likeCount || 0) - parseInt(a.statistics?.likeCount || 0);
      case "likesLowToHigh":
        return parseInt(a.statistics?.likeCount || 0) - parseInt(b.statistics?.likeCount || 0);
      default:
        return 0;
    }
  });

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <Link to="/">Back to home</Link>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <h2 style={{ margin: 0 }}>Featured YouTube Videos</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <label htmlFor="sort-select" style={{ fontWeight: "bold" }}>Sort by:</label>
          <select
            id="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              fontFamily: "inherit",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer"
            }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="viewsHighToLow">Views: High to Low</option>
            <option value="viewsLowToHigh">Views: Low to High</option>
            <option value="likesHighToLow">Likes: High to Low</option>
            <option value="likesLowToHigh">Likes: Low to High</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {sortedVideos.length > 0 ? (
          sortedVideos.map((video) => (
            console.log(video),
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

import React from "react";

function Video({ video }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            background: "linear-gradient(to bottom, #FEE7FF, #6D9EEA)"
        }}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                style={{ marginBottom: "0.5rem" }}
            ></iframe>
            <h3 style={{ margin: "0.5rem 0" }}>{video.snippet.title}</h3>
            <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.85em", color: "#666" }}>
                {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", justifyContent: "center", marginTop: "0.25rem" }}>
                <p style={{ margin: 0 }}>Views: {video.statistics.viewCount}</p>
                <span style={{ height: "1rem", width: "1px", backgroundColor: "#ccc" }}></span>
                <p style={{ margin: 0 }}>Likes: {video.statistics.likeCount}</p>
            </div>
        </div>
    );
}

export default Video;
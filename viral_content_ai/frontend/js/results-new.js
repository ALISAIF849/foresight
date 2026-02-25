document.addEventListener("DOMContentLoaded", () => {

    const data = JSON.parse(localStorage.getItem("viral_ai_result"));

    if (!data) {
        alert("No data found. Please upload a video first.");
        window.location.href = "upload.html";
        return;
    }

    const API_BASE_URL = "http://127.0.0.1:8000";

    // Thumbnail
    const thumbGrid = document.getElementById("thumbnailsGrid");
    thumbGrid.innerHTML = `
        <img src="${API_BASE_URL}/${data.thumbnail}" 
             class="rounded-xl shadow-md">
    `;

    // Transcript
    document.getElementById("transcript-text").textContent = data.transcript;

    // Instagram
    document.getElementById("instagram-caption").textContent = data.caption;
    document.getElementById("instagram-hashtags").textContent = data.hashtags;

    // YouTube
    document.getElementById("youtube-title").textContent = data.hook;
    document.getElementById("youtube-description").textContent =
        data.caption + "\n\n" + data.cta;

    // TikTok
    document.getElementById("tiktok-caption").textContent = data.caption;
    document.getElementById("tiktok-hashtags").textContent = data.hashtags;
});
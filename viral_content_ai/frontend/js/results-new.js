document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // LOAD RESULT DATA
    // ===============================
    const storedData = localStorage.getItem("viral_ai_result");

    if (!storedData) {
        alert("No processed video found.");
        window.location.href = "upload.html";
        return;
    }

    const data = JSON.parse(storedData);

    const API_BASE_URL = "http://127.0.0.1:8000";


    // ===============================
    // BEST THUMBNAIL
    // ===============================
    const thumbGrid = document.getElementById("thumbnailsGrid");

    if (data.thumbnail) {
        thumbGrid.innerHTML = `
            <div class="overflow-hidden rounded-xl shadow-md">
                <img 
                    src="${API_BASE_URL}/${data.thumbnail}" 
                    alt="Generated Thumbnail"
                    class="w-full h-full object-cover"
                />
            </div>
        `;
    } else {
        thumbGrid.innerHTML = `<p>No thumbnail generated</p>`;
    }


    // ===============================
    // TRANSCRIPT
    // ===============================
    const transcriptEl = document.getElementById("transcript-text");
    if (transcriptEl)
        transcriptEl.textContent = data.transcript || "Transcript unavailable";


    // ===============================
    // INSTAGRAM CONTENT
    // ===============================
    const instaCaption = document.getElementById("instagram-caption");
    const instaTags = document.getElementById("instagram-hashtags");

    if (instaCaption)
        instaCaption.textContent = data.caption || "";

    if (instaTags)
        instaTags.textContent = data.hashtags || "";


    // ===============================
    // YOUTUBE CONTENT
    // ===============================
    const ytTitle = document.getElementById("youtube-title");
    const ytDesc = document.getElementById("youtube-description");

    if (ytTitle)
        ytTitle.textContent = data.hook || "";

    if (ytDesc)
        ytDesc.textContent =
            (data.caption || "") +
            "\n\n" +
            (data.cta || "");


    // ===============================
    // TIKTOK CONTENT
    // ===============================
    const ttCaption = document.getElementById("tiktok-caption");
    const ttTags = document.getElementById("tiktok-hashtags");

    if (ttCaption)
        ttCaption.textContent = data.caption || "";

    if (ttTags)
        ttTags.textContent = data.hashtags || "";


    console.log("✅ Results Loaded Successfully");
});
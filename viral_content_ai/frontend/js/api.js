const API_BASE_URL = "http://127.0.0.1:8000";

async function processVideo(file) {

    const formData = new FormData();
    formData.append("video", file);
    formData.append("niche", "general");

    const response = await fetch(`${API_BASE_URL}/process-video`, {
        method: "POST",
        body: formData
    });

    if (!response.ok) {
        throw new Error("Backend processing failed");
    }

    return await response.json();
}
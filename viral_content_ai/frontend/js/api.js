const API_BASE_URL = 'http://localhost:8000';

async function uploadVideo(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) throw new Error('Upload failed');
    return await response.json();
}

async function processVideo(videoId) {
    const response = await fetch(`${API_BASE_URL}/process/${videoId}`, {
        method: 'POST'
    });
    
    if (!response.ok) throw new Error('Processing failed');
    return await response.json();
}

async function getClips(videoId) {
    const response = await fetch(`${API_BASE_URL}/clips/${videoId}`);
    if (!response.ok) throw new Error('Failed to fetch clips');
    return await response.json();
}

async function getContent(videoId) {
    const response = await fetch(`${API_BASE_URL}/content/${videoId}`);
    if (!response.ok) throw new Error('Failed to fetch content');
    return await response.json();
}

async function getResults(jobId) {
    const response = await fetch(`${API_BASE_URL}/results/${jobId}`);
    if (!response.ok) throw new Error('Failed to fetch results');
    return await response.json();
}

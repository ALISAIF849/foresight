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


<<<<<<< HEAD
    console.log("✅ Results Loaded Successfully");
});
=======
function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function loadTranscript(transcript) {
    const transcriptEl = document.getElementById('transcript-text');
    transcriptEl.textContent = transcript || "Transcript will be available after video processing completes.";
}

function loadCaptions(data) {
    // Load short captions
    const shortCaptionsContainer = document.getElementById('shortCaptions');
    shortCaptionsContainer.innerHTML = '';
    
    const shortCaptions = data.shortCaptions || [data.caption, data.hook, data.cta].filter(Boolean);
    
    shortCaptions.forEach((caption) => {
        const captionCard = document.createElement('div');
        captionCard.className = 'content-item';
        captionCard.onclick = () => copyToClipboard(caption);
        
        captionCard.innerHTML = `
            <p class="text-primary text-sm">${caption}</p>
        `;
        
        shortCaptionsContainer.appendChild(captionCard);
    });
    
    // Load long descriptions
    const longDescContainer = document.getElementById('longDescriptions');
    longDescContainer.innerHTML = '';
    
    const longDescs = data.longDescriptions || [data.caption];
    
    longDescs.forEach((desc) => {
        const descCard = document.createElement('div');
        descCard.className = 'content-item';
        descCard.onclick = () => copyToClipboard(desc);
        
        descCard.innerHTML = `
            <p class="text-primary text-sm leading-relaxed">${desc}</p>
        `;
        
        longDescContainer.appendChild(descCard);
    });
}

function loadAllHashtags(hashtags) {
    const container = document.getElementById('all-hashtags');
    container.innerHTML = '';
    
    (hashtags || []).forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'hashtag-pill';
        tagEl.textContent = tag.startsWith('#') ? tag : `#${tag}`;
        tagEl.onclick = () => copyToClipboard(tagEl.textContent);
        
        container.appendChild(tagEl);
    });
}

function getThreadText() {
    if (!resultsData || !resultsData.twitter_thread) return '';
    return resultsData.twitter_thread.join('\n\n');
}


// Generate Virality Heatmap
function generateHeatmap() {
    const container = document.getElementById('heatmapContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Generate 43 segments (one per second for 43-second video)
    const segments = 43;
    const heatmapData = [];
    
    for (let i = 0; i < segments; i++) {
        // Create peaks at certain points for 43-second video
        let intensity;
        if (i <= 3) intensity = 0.9 + Math.random() * 0.1; // Strong hook (0-3s)
        else if (i >= 17 && i <= 19) intensity = 0.4 + Math.random() * 0.2; // Retention drop (18s)
        else if (i >= 27 && i <= 30) intensity = 0.95 + Math.random() * 0.05; // Viral moment (28s)
        else if (i >= 39) intensity = 0.85 + Math.random() * 0.1; // CTA peak (40s+)
        else intensity = 0.5 + Math.random() * 0.3; // Normal engagement
        
        heatmapData.push(intensity);
    }
    
    heatmapData.forEach((intensity, index) => {
        const segment = document.createElement('div');
        segment.style.cssText = `
            position: absolute;
            left: ${(index / segments) * 100}%;
            width: ${100 / segments}%;
            height: 100%;
            background: ${getHeatColor(intensity)};
            transition: all 0.3s ease;
        `;
        
        segment.title = `${index}s - ${Math.round(intensity * 100)}% engagement`;
        
        segment.addEventListener('mouseenter', function() {
            this.style.transform = 'scaleY(1.2)';
            this.style.zIndex = '10';
        });
        
        segment.addEventListener('mouseleave', function() {
            this.style.transform = 'scaleY(1)';
            this.style.zIndex = '1';
        });
        
        container.appendChild(segment);
    });
}

function getHeatColor(intensity) {
    // Blue (low) -> Yellow -> Red (high)
    if (intensity < 0.33) {
        const r = Math.floor(intensity * 3 * 100);
        return `rgb(${r}, ${r}, 255)`;
    } else if (intensity < 0.66) {
        const g = Math.floor((intensity - 0.33) * 3 * 255);
        return `rgb(255, ${g}, 0)`;
    } else {
        const b = Math.floor((1 - intensity) * 3 * 255);
        return `rgb(255, ${b}, 0)`;
    }
}

// Load hashtags with trending indicators
function loadAllHashtags(hashtags) {
    const container = document.getElementById('all-hashtags');
    container.innerHTML = '';
    
    const trendingIndicators = ['🔥', '⭐', '💎', ''];
    
    (hashtags || []).forEach((tag, index) => {
        const tagEl = document.createElement('span');
        tagEl.className = 'hashtag-pill';
        
        // Randomly assign trending status (in real app, this comes from API)
        const indicator = trendingIndicators[index % 4];
        const tagText = tag.startsWith('#') ? tag : `#${tag}`;
        
        tagEl.textContent = indicator ? `${indicator} ${tagText}` : tagText;
        tagEl.onclick = () => copyToClipboard(tagText);
        
        // Add special styling for trending tags
        if (indicator === '🔥') {
            tagEl.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 142, 83, 0.2))';
            tagEl.style.borderLeft = '3px solid #FF6B6B';
        } else if (indicator === '⭐') {
            tagEl.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.2))';
            tagEl.style.borderLeft = '3px solid #FFD700';
        } else if (indicator === '💎') {
            tagEl.style.background = 'linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2))';
            tagEl.style.borderLeft = '3px solid #4FACFE';
        }
        
        container.appendChild(tagEl);
    });
}

// Language selector handler
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            const language = e.target.value;
            // In real app, this would trigger content regeneration in selected language
            showToast(`Content will be regenerated in ${e.target.options[e.target.selectedIndex].text}`);
        });
    }
    
    // Generate heatmap on load
    setTimeout(() => {
        generateHeatmap();
    }, 500);
});
>>>>>>> a2093d1 (Final updates)

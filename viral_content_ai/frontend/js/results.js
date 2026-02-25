const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('video_id');

if (!videoId) {
    window.location.href = 'upload.html';
}

// Load data on page load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadClips();
        await loadContent();
    } catch (error) {
        console.error('Error loading data:', error);
    }
});

async function loadClips() {
    const clips = await getClips(videoId);
    const container = document.getElementById('clipsContainer');
    
    clips.forEach(clip => {
        const clipCard = createClipCard(clip);
        container.appendChild(clipCard);
    });
}

function createClipCard(clip) {
    const card = document.createElement('div');
    card.className = 'clip-card bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg cursor-pointer';
    
    card.innerHTML = `
        <div class="aspect-video bg-gray-100 relative">
            <img src="${clip.thumbnail_url}" alt="${clip.title}" class="w-full h-full object-cover">
            <div class="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2.5 py-1 rounded-lg font-medium">
                ${formatDuration(clip.duration)}
            </div>
        </div>
        <div class="p-5">
            <h3 class="font-medium text-[#1D1D1F] mb-3 line-clamp-2 leading-snug">${clip.title}</h3>
            <div class="flex items-center justify-between">
                <span class="bg-blue-50 text-[#0066FF] px-3 py-1.5 rounded-full text-sm font-medium">
                    ${clip.viral_score}% Viral
                </span>
                <a href="${clip.video_url}" download class="text-[#0066FF] hover:text-[#0052CC] text-sm font-medium transition-colors">
                    Download
                </a>
            </div>
        </div>
    `;
    
    return card;
}

async function loadContent() {
    const content = await getContent(videoId);
    
    // Load titles
    const titlesContainer = document.getElementById('titlesContainer');
    content.titles.forEach(title => {
        const titleEl = document.createElement('div');
        titleEl.className = 'content-item p-5 bg-white rounded-xl cursor-pointer border border-gray-200';
        titleEl.innerHTML = `<p class="text-[#1D1D1F]">${title}</p>`;
        titleEl.onclick = () => copyToClipboard(title);
        titlesContainer.appendChild(titleEl);
    });
    
    // Load descriptions
    const descriptionsContainer = document.getElementById('descriptionsContainer');
    content.descriptions.forEach(desc => {
        const descEl = document.createElement('div');
        descEl.className = 'content-item p-5 bg-white rounded-xl cursor-pointer border border-gray-200';
        descEl.innerHTML = `<p class="text-[#6E6E73] leading-relaxed">${desc}</p>`;
        descEl.onclick = () => copyToClipboard(desc);
        descriptionsContainer.appendChild(descEl);
    });
    
    // Load hashtags
    const hashtagsContainer = document.getElementById('hashtagsContainer');
    content.hashtags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'bg-blue-50 text-[#0066FF] px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-blue-100 transition-colors font-medium';
        tagEl.textContent = tag;
        tagEl.onclick = () => copyToClipboard(tag);
        hashtagsContainer.appendChild(tagEl);
    });
    
    // Load voiceover
    if (content.voiceover_url) {
        const voiceoverContainer = document.getElementById('voiceoverContainer');
        voiceoverContainer.innerHTML = `
            <div class="bg-white rounded-xl p-8 border border-gray-200">
                <h3 class="font-medium text-[#1D1D1F] mb-5">Generated Voiceover</h3>
                <audio controls class="w-full">
                    <source src="${content.voiceover_url}" type="audio/mpeg">
                </audio>
            </div>
        `;
    }
}

function switchTab(tabName) {
    // Update tab buttons
    const tabs = ['titles', 'descriptions', 'hashtags', 'voiceover'];
    tabs.forEach(tab => {
        const button = document.getElementById(`tab-${tab}`);
        const content = document.getElementById(`content-${tab}`);
        
        if (tab === tabName) {
            button.classList.add('bg-[#0066FF]', 'text-white');
            button.classList.remove('text-[#6E6E73]');
            content.classList.remove('hidden');
        } else {
            button.classList.remove('bg-[#0066FF]', 'text-white');
            button.classList.add('text-[#6E6E73]');
            content.classList.add('hidden');
        }
    });
}

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

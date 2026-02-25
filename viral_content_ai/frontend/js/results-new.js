const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get('job_id');

let resultsData = null;

// Load data on page load
document.addEventListener('DOMContentLoaded', async () => {
    if (!jobId) {
        // Load mock data for demo
        loadMockData();
    } else {
        try {
            resultsData = await getResults(jobId);
            loadRealData(resultsData);
        } catch (error) {
            console.error('Error loading results:', error);
            loadMockData();
        }
    }
});

function loadRealData(data) {
    console.log('Loading real data:', data);
    
    // Update platform badge
    document.getElementById('platformBadge').textContent = data.platform.charAt(0).toUpperCase() + data.platform.slice(1);
    
    // Load thumbnails
    loadThumbnails(data.thumbnails);
    
    // Load clips
    loadClips(data.clips);
    
    // Load platform-specific content
    loadPlatformContent(data);
    
    // Load hooks
    loadHooks(data.hook_variations || [data.hook]);
    
    // Load transcript
    loadTranscript(data.transcript);
    
    // Load captions
    loadCaptions(data);
    
    // Load all hashtags
    loadAllHashtags(data.hashtags);
    
    // Load new sections
    loadTwitterThread(data.twitter_thread);
    loadBlogPost(data.blog_post);
    loadThumbnailConcepts(data.thumbnail_concepts, data.thumbnail_texts);
}

function loadMockData() {
    const mockData = {
        platform: 'instagram',
        clips: [
            {
                id: 1,
                title: "Viral Moment #1",
                video_url: "https://via.placeholder.com/640x360/667eea/ffffff?text=Clip+1",
                thumbnail_url: "https://via.placeholder.com/640x360/667eea/ffffff?text=Clip+1",
                duration: 45,
                viral_score: 94
            },
            {
                id: 2,
                title: "Viral Moment #2",
                video_url: "https://via.placeholder.com/640x360/764ba2/ffffff?text=Clip+2",
                thumbnail_url: "https://via.placeholder.com/640x360/764ba2/ffffff?text=Clip+2",
                duration: 38,
                viral_score: 89
            },
            {
                id: 3,
                title: "Viral Moment #3",
                video_url: "https://via.placeholder.com/640x360/f093fb/ffffff?text=Clip+3",
                thumbnail_url: "https://via.placeholder.com/640x360/f093fb/ffffff?text=Clip+3",
                duration: 52,
                viral_score: 87
            }
        ],
        thumbnails: [
            { id: 1, url: "https://via.placeholder.com/1280x720/667eea/ffffff?text=Thumbnail+1" },
            { id: 2, url: "https://via.placeholder.com/1280x720/764ba2/ffffff?text=Thumbnail+2" },
            { id: 3, url: "https://via.placeholder.com/1280x720/f093fb/ffffff?text=Thumbnail+3" }
        ],
        caption: "This is your AI-generated caption for Instagram. It's engaging, concise, and optimized for maximum reach. 🚀",
        hashtags: ["#viral", "#content", "#creator", "#instagram", "#trending", "#ai", "#videomarketing", "#socialmedia", "#contentcreator", "#digitalmarketing", "#growth", "#engagement"],
        hook: "This changes everything...",
        hook_variations: [
            "This one habit changed everything",
            "Why nobody talks about this",
            "The secret they don't want you to know",
            "I tested this for 30 days...",
            "This is what actually works"
        ],
        transcript: "Welcome to this amazing video where we explore the power of AI-generated content. In today's digital landscape, creating engaging content across multiple platforms is more important than ever. This tool helps you transform your long-form videos into platform-optimized clips, complete with captions, hashtags, and thumbnails. Whether you're a content creator, marketer, or business owner, this solution streamlines your workflow and maximizes your reach. Let's dive into how you can leverage this technology to grow your audience and engagement across Instagram, YouTube, and TikTok.",
        shortCaptions: [
            "Transform your content in seconds! 🚀",
            "One video, multiple platforms. That's the power of AI.",
            "Stop spending hours editing. Let AI do the work."
        ],
        longDescriptions: [
            "Discover how AI is revolutionizing content creation. This comprehensive guide shows you exactly how to transform your long-form videos into platform-optimized content that drives engagement and growth.",
            "In this video, we break down the complete process of using AI to create viral content. From clip extraction to caption generation, learn the strategies that top creators use to maximize their reach."
        ],
        twitter_thread: [
            "🧵 Just discovered how AI is changing content creation forever. Here's what I learned:",
            "1/ Creating content for multiple platforms used to take HOURS. Now? Minutes. AI analyzes your video and extracts the most engaging moments automatically.",
            "2/ The secret? It's not just about cutting clips. AI detects: • Emotional peaks • Audience retention points • Viral potential • Platform-specific optimization",
            "3/ Here's what blew my mind: One 10-minute video → 12 platform-ready assets. Instagram Reels, YouTube Shorts, TikToks, thumbnails, captions, hashtags. All optimized.",
            "4/ The best part? You maintain your authentic voice. AI enhances your content, doesn't replace it. Your message, amplified.",
            "5/ If you're a creator spending hours on repurposing, this changes everything. Focus on creating. Let AI handle distribution.",
            "6/ The future of content isn't about working harder. It's about working smarter. This is how top creators scale without burning out."
        ],
        blog_post: {
            title: "How AI is Revolutionizing Content Creation",
            content: "In today's fast-paced digital landscape, content creators face an unprecedented challenge: maintaining a consistent presence across multiple platforms while producing high-quality, engaging content.\n\nThis is where AI-powered content transformation is changing the game. Imagine recording one long-form video and having AI automatically extract the most engaging moments, optimize clips for each platform, generate captions, create thumbnails, and suggest hashtags.\n\nThe results speak for themselves: 70% reduction in editing time, 3x increase in content output, and higher engagement rates across all platforms.\n\nAI isn't replacing human creativity—it's amplifying it. By automating technical tasks, creators can focus on what they do best: creating authentic, valuable content that resonates with their audience."
        },
        thumbnail_concepts: [
            "Bold text overlay with contrasting colors (yellow on dark blue)",
            "Close-up of most emotional moment with shocked expression",
            "Split-screen showing before/after or comparison",
            "Minimalist design with one powerful word in huge font",
            "Action shot with motion blur and dynamic composition"
        ],
        thumbnail_texts: [
            "This Changed Everything",
            "You're Doing It Wrong",
            "The Truth About...",
            "Watch This Before...",
            "I Tried This For 30 Days"
        ]
    };
    
    resultsData = mockData;
    loadRealData(mockData);
}

function loadThumbnails(thumbnails) {
    const container = document.getElementById('thumbnailsGrid');
    container.innerHTML = '';
    
    thumbnails.forEach((thumb) => {
        const thumbCard = document.createElement('div');
        thumbCard.className = 'card bg-secondary border-color shadow-custom overflow-hidden cursor-pointer hover:scale-105 transition-transform';
        thumbCard.onclick = () => downloadThumbnail(thumb.url);
        
        thumbCard.innerHTML = `
            <img src="${thumb.url}" alt="Thumbnail ${thumb.id}" class="w-full aspect-video object-cover">
            <div class="p-4 text-center">
                <p class="text-sm font-medium text-primary">Thumbnail ${thumb.id}</p>
                <p class="text-xs text-secondary mt-1">Click to download</p>
            </div>
        `;
        
        container.appendChild(thumbCard);
    });
}

function loadClips(clips) {
    const container = document.getElementById('clipsGrid');
    container.innerHTML = '';
    
    // Sort by viral score
    const sortedClips = [...clips].sort((a, b) => b.viral_score - a.viral_score);
    
    sortedClips.forEach(clip => {
        const clipCard = document.createElement('div');
        clipCard.className = 'clip-card';
        
        clipCard.innerHTML = `
            <div class="aspect-video bg-primary rounded-xl overflow-hidden relative">
                <img src="${clip.thumbnail_url}" alt="${clip.title}" class="w-full h-full object-cover">
                <div class="duration-badge absolute bottom-3 right-3">
                    ${formatDuration(clip.duration)}
                </div>
                <div class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                    <button onclick="playClip('${clip.video_url}')" class="bg-white text-primary px-6 py-3 rounded-full font-semibold">
                        ▶ Play
                    </button>
                </div>
            </div>
            <div class="p-5">
                <h3 class="font-medium text-primary mb-3 line-clamp-2 leading-snug">${clip.title}</h3>
                <div class="flex items-center justify-between">
                    <span class="viral-score">
                        ${clip.viral_score}% Viral
                    </span>
                    <a href="${clip.video_url}" download class="download-link text-sm">
                        Download
                    </a>
                </div>
            </div>
        `;
        
        container.appendChild(clipCard);
    });
    
    // Load best clips for each platform
    if (sortedClips.length > 0) {
        loadPlatformClip('instagram', sortedClips[0]);
        loadPlatformClip('youtube', sortedClips[0]);
        loadPlatformClip('tiktok', sortedClips[0]);
    }
}

function loadPlatformClip(platform, clip) {
    const container = document.getElementById(`${platform}-clip`);
    container.innerHTML = `
        <video controls class="w-full h-full rounded-xl">
            <source src="${clip.video_url}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}

function loadPlatformContent(data) {
    // Instagram
    document.getElementById('instagram-caption').textContent = data.caption || "Your engaging caption here...";
    document.getElementById('instagram-hashtags').textContent = (data.hashtags || []).join(' ');
    
    // YouTube
    document.getElementById('youtube-title').textContent = data.headline || data.hook || "Your Video Title";
    document.getElementById('youtube-description').textContent = data.caption || "Your video description here...";
    
    // TikTok
    document.getElementById('tiktok-caption').textContent = data.hook || "Your TikTok caption...";
    document.getElementById('tiktok-hashtags').textContent = (data.hashtags || []).slice(0, 5).join(' ');
}

function loadHooks(hooks) {
    const container = document.getElementById('hooksGrid');
    container.innerHTML = '';
    
    hooks.forEach((hook, index) => {
        const hookCard = document.createElement('div');
        hookCard.className = 'content-item';
        hookCard.onclick = () => copyToClipboard(hook);
        
        hookCard.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="text-2xl">${index + 1}</span>
                <p class="text-primary flex-1">${hook}</p>
            </div>
        `;
        
        container.appendChild(hookCard);
    });
}

function loadTwitterThread(thread) {
    const container = document.getElementById('twitterThread');
    if (!container) return;
    
    container.innerHTML = '';
    
    (thread || []).forEach((tweet, index) => {
        const tweetCard = document.createElement('div');
        tweetCard.className = 'content-item';
        tweetCard.onclick = () => copyToClipboard(tweet);
        
        tweetCard.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="text-lg font-semibold text-secondary">${index + 1}</span>
                <p class="text-primary flex-1">${tweet}</p>
            </div>
        `;
        
        container.appendChild(tweetCard);
    });
}

function loadBlogPost(blogData) {
    const container = document.getElementById('blogPost');
    if (!container) return;
    
    if (blogData && blogData.content) {
        const content = blogData.content
            .split('\n\n')
            .map(para => `<p class="mb-4">${para}</p>`)
            .join('');
        
        container.innerHTML = content;
    } else {
        container.innerHTML = '<p>Blog post content will be generated after processing.</p>';
    }
}

function loadThumbnailConcepts(concepts, texts) {
    const conceptsContainer = document.getElementById('thumbnailConcepts');
    const textsContainer = document.getElementById('thumbnailTexts');
    
    if (!conceptsContainer || !textsContainer) return;
    
    conceptsContainer.innerHTML = '';
    textsContainer.innerHTML = '';
    
    (concepts || []).forEach((concept) => {
        const conceptCard = document.createElement('div');
        conceptCard.className = 'content-item';
        conceptCard.onclick = () => copyToClipboard(concept);
        
        conceptCard.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="text-2xl">💡</span>
                <p class="text-primary text-sm flex-1">${concept}</p>
            </div>
        `;
        
        conceptsContainer.appendChild(conceptCard);
    });
    
    (texts || []).forEach((text) => {
        const textCard = document.createElement('div');
        textCard.className = 'content-item';
        textCard.onclick = () => copyToClipboard(text);
        
        textCard.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="text-2xl">✍️</span>
                <p class="text-primary font-semibold flex-1">${text}</p>
            </div>
        `;
        
        textsContainer.appendChild(textCard);
    });
}

function switchPlatform(platform) {
    // Update tabs
    ['instagram', 'youtube', 'tiktok'].forEach(p => {
        const tab = document.getElementById(`platform-${p}`);
        const content = document.getElementById(`platform-content-${p}`);
        
        if (p === platform) {
            tab.classList.add('active');
            content.classList.remove('hidden');
        } else {
            tab.classList.remove('active');
            content.classList.add('hidden');
        }
    });
}

function downloadClip(platform) {
    if (resultsData && resultsData.clips && resultsData.clips.length > 0) {
        const bestClip = resultsData.clips[0];
        window.open(bestClip.video_url, '_blank');
    }
}

function downloadThumbnail(url) {
    window.open(url, '_blank');
}

function downloadAll() {
    alert('Download all feature coming soon! For now, download clips and thumbnails individually.');
}

function playClip(url) {
    window.open(url, '_blank');
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

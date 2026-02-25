let selectedFile = null;

// File input handling
const videoFileInput = document.getElementById('videoFile');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFileBtn = document.getElementById('removeFile');
const uploadButton = document.getElementById('uploadButton');

videoFileInput.addEventListener('change', (e) => {
    handleFileSelect(e.target.files[0]);
});

removeFileBtn.addEventListener('click', () => {
    selectedFile = null;
    videoFileInput.value = '';
    fileInfo.classList.add('hidden');
    uploadButton.classList.add('hidden');
});

function handleFileSelect(file) {
    if (!file) return;
    
    if (!file.type.startsWith('video/')) {
        alert('Please select a video file');
        return;
    }
    
    selectedFile = file;
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileInfo.classList.remove('hidden');
    uploadButton.classList.remove('hidden');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Upload video function
async function uploadVideo() {
    if (!selectedFile) return;
    
    try {
        // Hide upload card, show processing
        document.getElementById('uploadCard').classList.add('hidden');
        document.getElementById('processingCard').classList.remove('hidden');
        
        // Start dynamic headline rotation
        startHeadlineRotation();
        
        // Start intelligent step progression
        await progressThroughSteps();
        
        // Redirect to results page
        window.location.href = 'results.html';
        
    } catch (error) {
        console.error('Error:', error);
        alert('Upload failed. Please make sure the backend is running on http://localhost:8000');
        document.getElementById('uploadCard').classList.remove('hidden');
        document.getElementById('processingCard').classList.add('hidden');
    }
}

// Dynamic headline messages
const headlineMessages = [
    "Analyzing Your Video",
    "Transcribing Audio",
    "Detecting Viral Moments",
    "Analyzing Audience Patterns",
    "Extracting Key Segments",
    "Generating Thumbnails",
    "Optimizing Content",
    "Creating Captions"
];

let headlineIndex = 0;
let headlineInterval = null;

function startHeadlineRotation() {
    const titleEl = document.getElementById('processingTitle');
    
    headlineInterval = setInterval(() => {
        headlineIndex = (headlineIndex + 1) % headlineMessages.length;
        titleEl.style.opacity = '0';
        titleEl.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            titleEl.textContent = headlineMessages[headlineIndex];
            titleEl.style.opacity = '1';
            titleEl.style.transform = 'translateY(0)';
        }, 300);
    }, 2500);
}

function stopHeadlineRotation() {
    if (headlineInterval) {
        clearInterval(headlineInterval);
    }
}

// Intelligent step progression
async function progressThroughSteps() {
    const steps = [
        { id: 'step1', duration: 800, progress: 10 },   // Uploading
        { id: 'step2', duration: 2000, progress: 25 },  // Transcribing
        { id: 'step3', duration: 2500, progress: 45 },  // Detecting moments
        { id: 'step4', duration: 2000, progress: 65 },  // Extracting clips
        { id: 'step5', duration: 1500, progress: 80 },  // Thumbnails
        { id: 'step6', duration: 1200, progress: 100 }  // Captions
    ];
    
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        
        // Activate current step
        activateStep(step.id);
        updateProgress(step.progress);
        
        // Wait for step duration
        await sleep(step.duration);
        
        // Complete current step
        completeStep(step.id);
    }
    
    // Final completion
    await sleep(500);
    stopHeadlineRotation();
}

function activateStep(stepId) {
    const step = document.getElementById(stepId);
    step.classList.add('active');
    step.classList.remove('complete');
}

function completeStep(stepId) {
    const step = document.getElementById(stepId);
    step.classList.remove('active');
    step.classList.add('complete');
}

function updateProgress(percent) {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

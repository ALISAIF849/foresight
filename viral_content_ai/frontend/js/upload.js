let selectedFile = null;

// ===============================
// ELEMENT REFERENCES
// ===============================
const videoFileInput = document.getElementById('videoFile');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFileBtn = document.getElementById('removeFile');

const uploadButtonContainer =
    document.getElementById('uploadButtonContainer');

const uploadButton =
    document.getElementById('uploadButton');

// ✅ IMPORTANT — bind click event
uploadButton.addEventListener("click", uploadVideo);

// ===============================
// FILE SELECT
// ===============================
videoFileInput.addEventListener('change', (e) => {
    handleFileSelect(e.target.files[0]);
});

removeFileBtn.addEventListener('click', () => {
    selectedFile = null;
    videoFileInput.value = '';

    fileInfo.classList.add('hidden');
    uploadButtonContainer.classList.add('hidden');
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
    uploadButtonContainer.classList.remove('hidden');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
        Math.round(bytes / Math.pow(k, i) * 100) / 100 +
        ' ' +
        sizes[i]
    );
}

// ===============================
// MAIN UPLOAD FUNCTION
// ===============================
async function uploadVideo() {

    if (!selectedFile) {
        alert("Please select a video first");
        return;
    }

    try {

        console.log("🚀 Upload started");

        document.getElementById('uploadCard')
            .classList.add('hidden');

        document.getElementById('processingCard')
            .classList.remove('hidden');

        startHeadlineRotation();

        // ===============================
        // SEND VIDEO TO BACKEND
        // ===============================
        const formData = new FormData();
        formData.append("video", selectedFile);
        formData.append("niche", "general");
        const response = await fetch(
            "http://127.0.0.1:8000/process-video",
            {
                method: "POST",
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error("Backend processing failed");
        }

        const result = await response.json();

        console.log("✅ Backend Response:", result);

        // ===============================
        // SAVE RESULT
        // ===============================
        localStorage.removeItem("viral_ai_result");

        localStorage.setItem(
            "viral_ai_result",
            JSON.stringify(result)
        );

        console.log("✅ Saved to localStorage");

        // ===============================
        // SHOW PROGRESS ANIMATION
        // ===============================
        await progressThroughSteps();

        stopHeadlineRotation();

        console.log("➡ Redirecting");

        window.location.href = "results.html";

    } catch (error) {

        console.error("❌ Upload Error:", error);

        alert(
            "Processing failed.\nMake sure FastAPI is running at http://127.0.0.1:8000"
        );

        document.getElementById('uploadCard')
            .classList.remove('hidden');

        document.getElementById('processingCard')
            .classList.add('hidden');

        stopHeadlineRotation();
    }
}

// ===============================
// HEADLINE ROTATION
// ===============================
const headlineMessages = [
    "Analyzing Your Video",
    "Transcribing Audio",
    "Detecting Viral Moments",
    "Extracting Key Segments",
    "Generating Thumbnails",
    "Optimizing Content"
];

let headlineIndex = 0;
let headlineInterval = null;

function startHeadlineRotation() {

    const titleEl =
        document.getElementById('processingTitle');

    headlineInterval = setInterval(() => {

        headlineIndex =
            (headlineIndex + 1) %
            headlineMessages.length;

        titleEl.style.opacity = "0";

        setTimeout(() => {
            titleEl.textContent =
                headlineMessages[headlineIndex];
            titleEl.style.opacity = "1";
        }, 300);

    }, 2500);
}

function stopHeadlineRotation() {
    clearInterval(headlineInterval);
}

// ===============================
// PROGRESS STEPS
// ===============================
async function progressThroughSteps() {

    const steps = [
        { id: 'step1', progress: 15, duration: 800 },
        { id: 'step2', progress: 35, duration: 1200 },
        { id: 'step3', progress: 55, duration: 1500 },
        { id: 'step4', progress: 75, duration: 1200 },
        { id: 'step5', progress: 90, duration: 1000 },
        { id: 'step6', progress: 100, duration: 800 }
    ];

    for (const step of steps) {

        activateStep(step.id);
        updateProgress(step.progress);

        await sleep(step.duration);

        completeStep(step.id);
    }
}

function activateStep(id) {
    const step = document.getElementById(id);
    step.classList.add("active");
}

function completeStep(id) {
    const step = document.getElementById(id);
    step.classList.remove("active");
    step.classList.add("complete");
}

function updateProgress(percent) {

    document.getElementById('progressFill')
        .style.width = percent + "%";

    document.getElementById('progressPercent')
        .textContent = percent + "%";
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}
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
        
        // Simulate upload progress
        updateStep('step1', 'active');
        await sleep(500);
        updateStep('step1', 'complete');
        
        // Upload to backend
        updateStep('step2', 'active');
        const formData = new FormData();
        formData.append('file', selectedFile);
        
        const response = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        
        const data = await response.json();
        updateStep('step2', 'complete');
        
        // Simulate processing steps
        updateStep('step3', 'active');
        await sleep(1000);
        updateStep('step3', 'complete');
        
        updateStep('step4', 'active');
        await sleep(1000);
        updateStep('step4', 'complete');
        
        // Redirect to results page
        // For now, redirect without job_id to show mock data
        window.location.href = 'results.html';
        
    } catch (error) {
        console.error('Error:', error);
        alert('Upload failed. Please make sure the backend is running on http://localhost:8000');
        document.getElementById('uploadCard').classList.remove('hidden');
        document.getElementById('processingCard').classList.add('hidden');
    }
}

function updateStep(stepId, state) {
    const step = document.getElementById(stepId);
    const circle = step.querySelector('.w-6');
    const text = step.querySelector('span');
    
    if (state === 'active') {
        step.style.background = 'rgba(0, 102, 255, 0.05)';
        circle.style.borderColor = '#0066FF';
        circle.style.background = '#0066FF';
        text.style.color = '#1D1D1F';
    } else if (state === 'complete') {
        step.style.background = 'rgba(34, 197, 94, 0.05)';
        circle.style.borderColor = '#22C55E';
        circle.style.background = '#22C55E';
        circle.innerHTML = '<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
        text.style.color = '#22C55E';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

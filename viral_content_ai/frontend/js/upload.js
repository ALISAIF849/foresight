let selectedFile = null;

document.getElementById('videoFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        selectedFile = file;
        displayFileInfo(file);
    }
});

document.getElementById('removeFile').addEventListener('click', function() {
    selectedFile = null;
    document.getElementById('videoFile').value = '';
    document.getElementById('fileInfo').classList.add('hidden');
    document.getElementById('uploadButton').classList.add('hidden');
});

function displayFileInfo(file) {
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const uploadButton = document.getElementById('uploadButton');
    
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

async function uploadVideo() {
    if (!selectedFile) return;
    
    // Hide upload card, show processing
    document.getElementById('uploadCard').classList.add('hidden');
    document.getElementById('processingCard').classList.remove('hidden');
    
    try {
        // Step 1: Upload
        updateStep(1, 'active');
        const formData = new FormData();
        formData.append('file', selectedFile);
        
        const uploadResponse = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!uploadResponse.ok) throw new Error('Upload failed');
        const uploadResult = await uploadResponse.json();
        updateStep(1, 'complete');
        
        // Step 2: Process
        updateStep(2, 'active');
        await new Promise(resolve => setTimeout(resolve, 1000));
        updateStep(2, 'complete');
        
        // Step 3: Detect
        updateStep(3, 'active');
        const processResponse = await fetch(`http://localhost:8000/process/${uploadResult.video_id}`, {
            method: 'POST'
        });
        
        if (!processResponse.ok) throw new Error('Processing failed');
        await processResponse.json();
        updateStep(3, 'complete');
        
        // Step 4: Generate
        updateStep(4, 'active');
        await new Promise(resolve => setTimeout(resolve, 1000));
        updateStep(4, 'complete');
        
        // Redirect to results
        setTimeout(() => {
            window.location.href = `results.html?video_id=${uploadResult.video_id}`;
        }, 500);
        
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during processing. Please try again.');
        location.reload();
    }
}

function updateStep(stepNumber, status) {
    const step = document.getElementById(`step${stepNumber}`);
    const circle = step.querySelector('div');
    const text = step.querySelector('span');
    
    if (status === 'active') {
        step.classList.add('bg-blue-50');
        circle.classList.remove('border-gray-300');
        circle.classList.add('border-[#0071E3]', 'border-4');
        text.classList.remove('text-[#6E6E73]');
        text.classList.add('text-[#1D1D1F]');
    } else if (status === 'complete') {
        step.classList.remove('bg-blue-50');
        circle.innerHTML = '<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
        circle.classList.remove('border-[#0071E3]', 'border-4');
        circle.classList.add('bg-[#0071E3]', 'flex', 'items-center', 'justify-center');
        text.classList.add('text-[#6E6E73]');
    }
}

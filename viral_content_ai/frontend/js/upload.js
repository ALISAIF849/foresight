const videoInput = document.getElementById("videoFile");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const uploadButton = document.getElementById("uploadButton");
const removeFileBtn = document.getElementById("removeFile");

const uploadCard = document.getElementById("uploadCard");
const processingCard = document.getElementById("processingCard");

videoInput.addEventListener("change", () => {

    const file = videoInput.files[0];
    if (!file) return;

    fileInfo.classList.remove("hidden");
    uploadButton.classList.remove("hidden");

    fileName.textContent = file.name;
    fileSize.textContent =
        (file.size / (1024 * 1024)).toFixed(2) + " MB";
});

removeFileBtn.addEventListener("click", () => {
    videoInput.value = "";
    fileInfo.classList.add("hidden");
    uploadButton.classList.add("hidden");
});

async function uploadVideo() {

    const file = videoInput.files[0];

    if (!file) {
        alert("Please select a video first");
        return;
    }

    try {

        uploadCard.classList.add("hidden");
        processingCard.classList.remove("hidden");

        const result = await processVideo(file);

        // Save result
        localStorage.setItem("viral_ai_result", JSON.stringify(result));

        // Redirect
        window.location.href = "results.html";

    } catch (error) {

        alert("Processing failed. Check backend.");
        console.error(error);

        processingCard.classList.add("hidden");
        uploadCard.classList.remove("hidden");
    }
}
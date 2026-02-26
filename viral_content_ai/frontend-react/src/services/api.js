const API_BASE = "http://127.0.0.1:8000";

export const processVideo = async (video, niche) => {
  const formData = new FormData();

  formData.append("video", video);
  formData.append("niche", niche);

  const response = await fetch(
    `${API_BASE}/process-video`,
    {
      method: "POST",
      body: formData,
    }
  );

  return await response.json();
};
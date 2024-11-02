// NASA API setup
const API_KEY = "YOUR_API_KEY"; // Replace with your NASA API key
const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

// Fetch Mars Rover photos based on selected date
async function fetchPhotos(date) {
  try {
    const response = await fetch(`${API_URL}?earth_date=${date}&api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch photos.");
    const data = await response.json();
    return data.photos.slice(0, 3); // Limit to 3 photos
  } catch (error) {
    console.error("Error:", error);
    alert("Could not load photos. Please try a different date.");
  }
}

// Display photos in the gallery
function displayPhotos(photos) {
  const gallery = document.getElementById("photo-gallery");
  gallery.innerHTML = ""; // Clear previous photos

  photos.forEach(photo => {
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    photoDiv.innerHTML = `
      <img src="${photo.img_src}" alt="${photo.camera.full_name} photo taken on ${photo.earth_date}">
      <p>${photo.camera.full_name} - ${photo.earth_date}</p>
    `;
    gallery.appendChild(photoDiv);
  });
}

// Load photos from a significant date when the page loads
async function loadInitialPhotos() {
  const initialDate = "2013-04-04"; // Significant Mars Rover mission date
  const photos = await fetchPhotos(initialDate);
  if (photos) displayPhotos(photos);
}

// Event listener for loading photos based on user-selected date
document.getElementById("load-photos").addEventListener("click", async () => {
  const date = document.getElementById("photo-date").value;
  if (!date) {
    alert("Please select a date.");
    return;
  }
  const photos = await fetchPhotos(date);
  if (photos) displayPhotos(photos);
});

// Load initial photos on page load
loadInitialPhotos();

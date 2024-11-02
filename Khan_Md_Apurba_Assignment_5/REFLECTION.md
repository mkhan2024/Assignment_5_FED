# Reflection on Mars Rover Photo Explorer Project

### 1. Can I explain what my code does?
My code uses JavaScript to fetch images from NASA’s Mars Rover Photos API based on user-selected dates or pre-set significant dates. When a date is selected, the app fetches three images from the NASA API, parses the JSON response, and displays the photos along with relevant metadata (camera name and Earth date).

### 2. What was my coding process?
I started by setting up the project structure with HTML, CSS, and JavaScript files, then initialized a Git repository. I created an `api-integration` branch for connecting the NASA API and added error handling. Next, I created a `dynamic-ui` branch to set up the UI, allowing users to select dates and view significant mission dates. I then styled the UI in CSS, focused on accessibility, and tested in different browsers.

### 3. What challenges did I face?
One challenge was handling dates with fewer than three available photos, which could leave empty spaces in the gallery. I addressed this by limiting photos to three or fewer and providing a fallback message if no photos were available. Another challenge was setting up async calls correctly, as any errors could break the display. Testing across browsers also revealed layout inconsistencies.

### 4. What would I do differently now?
If I were to do this project again, I’d add loading animations for a better user experience and cache responses to optimize API usage. Additionally, I’d explore adding a “Favorites” feature, allowing users to save photos to view later.
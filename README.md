
---

# NASA Astronomy Picture of the Day App

This web application allows users to explore NASA's Astronomy Picture of the Day (APOD). Users can view the latest picture, search for pictures by date, and browse through a gallery of past images.

## Features

- **Get Today's Picture**: Fetches and displays the Astronomy Picture of the Day for the current date.
- **Search by Date**: Allows users to search for pictures by selecting a specific date.
- **Gallery View**: Displays a grid of past Astronomy Pictures of the Day with titles, dates, and thumbnails.
- **Toggle Explanation**: Users can toggle the display of explanations for each picture in the gallery.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Programming language for static typing and enhanced tooling.
- **NASA API**: Fetches Astronomy Picture of the Day data from NASA's API.
- **Tailwind CSS**: A utility-first CSS framework packed with classes that can be composed to build any design.

## Components

### `App.tsx`

The main component of the application. It includes the navigation bar, date input, photo display, and gallery view. Allows users to fetch pictures by date and toggle between photo and gallery views.

### `DateInput.tsx`

A reusable component for date input. Used in the navigation bar to select a specific date for fetching pictures.

### `Photo.tsx`

Displays a single photo with its title, date, image, and explanation. Users can toggle the display of the explanation for each photo.

### `Gallery.tsx`

Displays a grid of past Astronomy Pictures of the Day. Each photo includes its title, date, thumbnail, and a button to toggle the display of its explanation.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/Thaura644/nasa-apod-app.git`
2. Install dependencies: `cd nasa-apod-app` and `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Credits

This application was created by [Your Name].

## License

This project is licensed under the [MIT License](LICENSE).

---


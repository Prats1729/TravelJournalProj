# My Travel Journal

A clean and modern travel journal application built with React and Vite. This project showcases various travel destinations with detailed information, including locations, dates, and interesting facts.

## Features

- **Dynamic Content:** Renders travel entries dynamically from a central data source.
- **Detailed Entries:** Each card includes a high-quality image, location (with Google Maps link), title, travel dates, and descriptive facts.
- **Modern UI:** Built with a focus on clean typography and consistent spacing for an optimal reading experience.
- **Responsive Design:** Optimized for different screen sizes.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** CSS3

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd TravelJournalProj
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

### Build

To create a production-ready build:
```bash
npm run build
```

## Data Structure

The application uses a centralized data file located at `src/data/locationData.js`. You can easily add new travel entries by adding objects to the `Locations` array:

```javascript
{
    id: number,
    mainImg: string (URL),
    location: string (Country),
    gmapLink: string (Google Maps URL),
    locationName: string,
    date: string,
    facts: string
}
```

## License

This project is open-source and available under the MIT License.

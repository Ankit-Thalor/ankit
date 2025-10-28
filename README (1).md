# BookRecs - Book Recommendation Website 📚

A modern, responsive book recommendation website built with HTML, CSS, and JavaScript. Perfect for book lovers to discover new reads, share reviews, and explore different genres.

## ✨ Features

### 🎯 Core Features
- **Curated Book Recommendations**: Browse handpicked books across various genres
- **Genre Filtering**: Easy navigation through Fiction, Mystery, Romance, Sci-Fi, Biography, and Self-Help
- **Search Functionality**: Find books by title, author, or genre
- **User Reviews**: Submit and view book reviews with star ratings
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🎨 Design Features
- Modern gradient design with smooth animations
- Card-based layout for easy browsing
- Interactive star rating system
- Mobile-first responsive design
- Smooth scrolling navigation
- Loading animations and hover effects

### 🚀 Technical Features
- Pure HTML, CSS, and JavaScript (no frameworks required)
- Local storage for saving user reviews
- Mobile hamburger menu
- Scroll-to-top functionality
- Form validation
- Cross-browser compatibility

## 📁 Project Structure

```
BookRecs/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Setup Instructions

### Option 1: Simple Setup (Recommended for beginners)
1. Download all files (index.html, styles.css, script.js)
2. Place them in the same folder
3. Double-click `index.html` to open in your web browser
4. That's it! Your website is ready to use

### Option 2: Local Server Setup
1. Download all files to a folder
2. If you have Python installed:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Open browser and go to `http://localhost:8000`

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Open the project folder in VS Code
3. Right-click on `index.html` and select "Open with Live Server"

## 🌐 Hosting Your Website for Free

### GitHub Pages (Recommended)
1. Create a GitHub account
2. Create a new repository named `your-username.github.io`
3. Upload your files (index.html, styles.css, script.js)
4. Your site will be live at `https://your-username.github.io`

### Other Free Hosting Options
- **Netlify**: Drag and drop your folder to deploy instantly
- **Vercel**: Connect your GitHub repo for automatic deployment
- **Firebase Hosting**: Google's free hosting platform
- **Surge.sh**: Simple command-line deployment

## 📱 Features Walkthrough

### Navigation
- Fixed header with smooth scrolling navigation
- Mobile-responsive hamburger menu
- Logo with book icon

### Hero Section
- Gradient background with call-to-action
- Search bar for finding books
- Responsive typography

### Featured Books
- Grid layout of book cards
- Book covers with emoji icons
- Author, genre, and rating information
- Hover effects and animations

### Genres
- Visual genre cards with icons
- Click to filter books by genre
- Responsive grid layout

### Reviews Section
- Display of user and sample reviews
- Star ratings
- Responsive card layout

### Submit Review Form
- Complete form with validation
- Interactive star rating system
- Local storage saves reviews
- Success notifications

## 🎨 Customization Guide

### Adding New Books
Edit the `sampleBooks` array in `script.js`:

```javascript
{
    id: 7,
    title: "Your Book Title",
    author: "Author Name",
    genre: "genre-name",
    rating: 5,
    description: "Book description here",
    cover: "📖" // Use any emoji
}
```

### Changing Colors
Main colors in `styles.css`:
- Primary Blue: `#3498db`
- Secondary Purple: `#764ba2`
- Dark Text: `#2c3e50`
- Light Background: `#f8f9fa`

### Adding New Genres
1. Add genre card in HTML
2. Add genre option in the form select
3. Add corresponding icon and styling

## 📚 Sample Data Included

The website comes with 6 sample books across different genres:
- Fiction: "The Seven Husbands of Evelyn Hugo"
- Self-Help: "Atomic Habits" 
- Mystery: "The Thursday Murder Club"
- Sci-Fi: "Dune"
- Romance: "Pride and Prejudice"
- Biography: "Steve Jobs"

Plus 3 sample reviews to demonstrate the review system.

## 🔧 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📈 Performance Features

- Optimized images and icons
- Minimal external dependencies
- Local storage for data persistence
- Efficient CSS animations
- Mobile-first responsive design

## 🛡️ Security Features

- Form validation to prevent empty submissions
- Local storage for client-side data only
- No server-side vulnerabilities
- Safe emoji usage for book covers

## 🎯 Perfect For

- **Students**: Learning web development
- **Book Clubs**: Sharing recommendations
- **Personal Projects**: Portfolio websites
- **Small Communities**: Local book groups
- **Learning**: HTML, CSS, JavaScript practice

## 🤝 Contributing

Feel free to:
- Add more sample books
- Improve the design
- Add new features
- Fix bugs
- Enhance mobile experience

## 📝 License

This project is open source and available under the MIT License.

## 🎉 Getting Started

1. Download the files
2. Open `index.html` in your browser
3. Start exploring books and submitting reviews!
4. Customize it to make it your own

**Happy Reading! 📖✨**

---

*Built with ❤️ for book lovers everywhere*

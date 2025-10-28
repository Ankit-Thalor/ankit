// Sample book data
const sampleBooks = [
    {
        id: 1,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "fiction",
        rating: 5,
        description: "A captivating story about a reclusive Hollywood icon who finally decides to tell her story to an unknown journalist.",
        cover: "📚"
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "self-help",
        rating: 5,
        description: "An easy and proven way to build good habits and break bad ones through small changes that make a big difference.",
        cover: "💪"
    },
    {
        id: 3,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        genre: "mystery",
        rating: 4,
        description: "In a peaceful retirement village, four unlikely friends meet weekly to investigate cold cases.",
        cover: "🔍"
    },
    {
        id: 4,
        title: "Dune",
        author: "Frank Herbert",
        genre: "sci-fi",
        rating: 5,
        description: "Set in the distant future amidst a feudal interstellar society, this epic science fiction novel follows young Paul Atreides.",
        cover: "🚀"
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "romance",
        rating: 5,
        description: "The classic tale of Elizabeth Bennet and Mr. Darcy, exploring themes of love, reputation, and class.",
        cover: "💕"
    },
    {
        id: 6,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genre: "biography",
        rating: 4,
        description: "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs over two years.",
        cover: "👤"
    }
];

// Sample reviews data
const sampleReviews = [
    {
        id: 1,
        bookTitle: "The Seven Husbands of Evelyn Hugo",
        rating: 5,
        text: "Absolutely captivating! I couldn't put it down. The character development is phenomenal and the plot twists kept me guessing until the very end.",
        author: "BookLover123"
    },
    {
        id: 2,
        bookTitle: "Atomic Habits",
        rating: 5,
        text: "Life-changing book! The concepts are easy to understand and implement. I've already started seeing positive changes in my daily routine.",
        author: "ProductivityFan"
    },
    {
        id: 3,
        bookTitle: "The Thursday Murder Club",
        rating: 4,
        text: "Charming and witty! The elderly protagonists are delightful and the mystery is well-crafted. Perfect for cozy mystery lovers.",
        author: "MysteryReader"
    }
];

// Store for user-submitted reviews
let userReviews = JSON.parse(localStorage.getItem('userReviews')) || [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedBooks();
    displayReviews();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Review form submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmission);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Display featured books
function displayFeaturedBooks(books = sampleBooks) {
    const featuredBooksContainer = document.getElementById('featuredBooks');
    if (!featuredBooksContainer) return;

    featuredBooksContainer.innerHTML = '';

    books.forEach(book => {
        const bookCard = createBookCard(book);
        featuredBooksContainer.appendChild(bookCard);
    });
}

// Create a book card element
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const stars = generateStarRating(book.rating);

    bookCard.innerHTML = `
        <div class="book-cover">${book.cover}</div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">by ${book.author}</p>
            <span class="genre">${book.genre.charAt(0).toUpperCase() + book.genre.slice(1)}</span>
            <div class="rating">${stars}</div>
            <p>${book.description}</p>
        </div>
    `;

    return bookCard;
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star" style="color: #ddd;">★</span>';
        }
    }
    return stars;
}

// Display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsGrid');
    if (!reviewsContainer) return;

    // Combine sample reviews with user reviews
    const allReviews = [...sampleReviews, ...userReviews];
    reviewsContainer.innerHTML = '';

    allReviews.slice(0, 6).forEach(review => { // Show only first 6 reviews
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
}

// Create a review card element
function createReviewCard(review) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    const stars = generateStarRating(review.rating);

    reviewCard.innerHTML = `
        <div class="review-header">
            <div class="review-book">${review.bookTitle}</div>
            <div class="review-rating">${stars}</div>
        </div>
        <div class="review-text">"${review.text}"</div>
        <div class="review-author">- ${review.author}</div>
    `;

    return reviewCard;
}

// Handle review form submission
function handleReviewSubmission(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value || 0);
    const reviewText = document.getElementById('review').value;

    if (!bookTitle || !author || !genre || !rating || !reviewText) {
        alert('Please fill in all fields');
        return;
    }

    // Create new review object
    const newReview = {
        id: Date.now(),
        bookTitle: bookTitle,
        rating: rating,
        text: reviewText,
        author: 'You'
    };

    // Add to user reviews
    userReviews.unshift(newReview);

    // Save to localStorage
    localStorage.setItem('userReviews', JSON.stringify(userReviews));

    // Reset form
    e.target.reset();

    // Refresh reviews display
    displayReviews();

    // Show success message
    showSuccessMessage('Review submitted successfully!');

    // Scroll to reviews section
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 500;
    `;
    successDiv.textContent = message;

    document.body.appendChild(successDiv);

    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Search books function
function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        displayFeaturedBooks(); // Show all books if search is empty
        return;
    }

    const filteredBooks = sampleBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );

    displayFeaturedBooks(filteredBooks);

    // Scroll to recommendations section
    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
}

// Filter books by genre
function filterByGenre(genre) {
    const filteredBooks = sampleBooks.filter(book => book.genre === genre);
    displayFeaturedBooks(filteredBooks);

    // Scroll to recommendations section
    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
}

// Handle Enter key press in search input
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.id === 'searchInput') {
        searchBooks();
    }
});

// Add loading animation for better UX
function showLoading(container) {
    container.innerHTML = `
        <div style="text-align: center; padding: 50px;">
            <div style="display: inline-block; width: 50px; height: 50px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 20px; color: #7f8c8d;">Loading...</p>
        </div>
    `;
}

// Add CSS animation for loading spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            createScrollToTopButton();
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: background 0.3s ease;
    `;

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.background = '#2980b9';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.background = '#3498db';
    });

    document.body.appendChild(scrollBtn);
}

// Add book recommendation algorithm (simple content-based filtering)
function getRecommendations(currentBook) {
    return sampleBooks
        .filter(book => book.id !== currentBook.id && book.genre === currentBook.genre)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
}

// Add random book suggestion feature
function getRandomBook() {
    const randomIndex = Math.floor(Math.random() * sampleBooks.length);
    return sampleBooks[randomIndex];
}

// Console welcome message
console.log(`
🎉 Welcome to BookRecs!
📚 Your personal book recommendation hub
✨ Discover amazing books and share your reviews!

Features:
- Browse curated book recommendations
- Filter books by genre
- Search for books, authors, or genres
- Submit your own book reviews
- Responsive design for all devices

Happy Reading! 📖
`);
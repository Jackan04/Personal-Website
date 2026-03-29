const categories = ["web", "mobile", "design"];

const projects = [
  {
    category: categories[0],
    url: "https://github.com/Jackan04/chat-app-client",
    title: "Chat App",
    preview:
      "Full-stack messaging app with authentication, user search and conversation management.",
    featured: true,
  },
  {
    category: categories[0],
    url: "https://github.com/Jackan04/blog-api",
    title: "Blog Platform",
    preview:
      "Three-part blogging platform with a REST API, admin dashboard and public-facing client.",
    featured: false,
  },
  {
    category: categories[0],
    url: "https://github.com/Jackan04/file-uploader",
    title: "File Uploader",
    preview:
      "File management app with authentication and full CRUD for files and folders.",
    featured: true,
  },
  {
    category: categories[0],
    url: "https://github.com/Jackan04/Ticky",
    title: "Task Manager",
    preview:
      "Delightful task manager for organizing tasks into lists, adding notes and tracking due dates.",
    featured: false,
  },
  {
    category: categories[1],
    url: "https://github.com/Jackan04/MediaTracker?tab=readme-ov-file",
    title: "Media Tracker",
    preview:
      "Track movies and TV shows with search, personal watchlists and recommendations.",
    featured: false,
  },
  {
    category: categories[1],
    url: "https://github.com/Jackan04/ShelfLife",
    title: "Shelf Life",
    preview: "Track groceries and expiration dates in a native iOS app.",
    featured: false,
  },
  {
    category: categories[2],
    url: "https://www.linkedin.com/...",
    title: "Redesign of Self-Checkout",
    preview:
      "UI design proposal to improve the self-checkout experience in a retail store.",
    featured: false,
  },
];

export { projects, categories };

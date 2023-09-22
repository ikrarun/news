/// <reference types="astro/client" />


// Define an interface for the "source" object
interface NewsSource {
    id: string | null;
    name: string;
  }
  
  // Define an interface for each article
  interface NewsArticle {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }
  
  // Define the main interface for the JSON data
  interface NewsData {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
  }
  
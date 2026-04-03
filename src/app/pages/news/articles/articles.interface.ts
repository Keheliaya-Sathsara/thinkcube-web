// Interface for the article object structure
interface Article {
  banner: string;          // URL for the main banner image
  heading: string;         // Main article heading/title
  avatar: string;          // URL for author's avatar
  author: {
    detailone: string;     // First author detail (e.g. name or role)
    detailtwo: string;     // Second author detail (e.g. date or organization)
  };
  contentone: string;      // First content section
  contenttwo: string;      // First content section
  contentthree: string;      // First content section
  quote: string;           // Featured quote
  quoteauthor: string;     // Quote attribution
  contentfour: string;       // Second content section
  headertwo: string;       // Secondary heading
  imagesaas: string;       // URL for secondary image
  imageby: string;         // Image attribution
  contentfive: string;    // Third content section
}

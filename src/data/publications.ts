export interface Publication {
  title: string;
  venue: string;
  year: number;
  url?: string;
}

// Add new entries here — the index page renders them in order and numbers them.
// Newest first reads best.
export const publications: Publication[] = [
  {
    title: 'Publication title goes here',
    venue: 'Journal / Venue',
    year: 2024,
    url: '#',
  },
  {
    title: 'Another publication title',
    venue: 'Journal / Venue',
    year: 2022,
    url: '#',
  },
  {
    title: 'A third, earlier piece of work',
    venue: 'Journal / Venue',
    year: 2019,
    url: '#',
  },
];

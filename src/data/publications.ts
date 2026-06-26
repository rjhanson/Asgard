export type PublicationType = 'journal' | 'conference' | 'report' | 'preprint';

export interface PubLink {
  label: string;
  url: string;
}

export interface Publication {
  title: string;
  /** Full author list, in order. The site author's name is bolded at render time. */
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  /** Canonical link — a DOI URL where one exists, otherwise the publisher/landing page.
      Use this for single-work entries. */
  url?: string;
  /** For multi-part works (e.g. a report series): one labelled link per part.
      When present, takes precedence over `url`. */
  links?: PubLink[];
  /** One-line summary of the topic or finding. */
  description?: string;
}

// Human-readable label per type, shown as a small badge on each row.
export const typeLabels: Record<PublicationType, string> = {
  journal: 'Journal Article',
  conference: 'Conference',
  report: 'Report',
  preprint: 'Preprint',
};

// Newest first. Add new entries anywhere — the list is sorted by year on render.
export const publications: Publication[] = [
  {
    title: 'A Guide to Effective Strategies for Supporting Expectant Transition-Age Foster Youth',
    authors:
      'Dana Schultz, Dionne Barnes-Proby, Ingrid Estrada-Darley, Yoselín Mayoral, Madison Williams, Russell Hanson, Aaron Kofner',
    venue: 'RAND Corporation',
    year: 2025,
    type: 'report',
    url: 'https://www.rand.org/pubs/tools/TLA3475-1.html',
    description:
      'A practitioner guide to evidence-based strategies for supporting pregnant and expectant youth aging out of the foster care system.',
  },
  {
    title: 'The Future of Indo-Pacific Information Warfare: Challenges and Prospects from the Rise of AI',
    authors: 'Russell Hanson, Adam R. Grissom, Christopher A. Mouton',
    venue: 'RAND Corporation',
    year: 2024,
    type: 'report',
    url: 'https://apps.dtic.mil/sti/html/trecms/AD1223845/',
    description:
      'Examines how advanced AI language models could supercharge PRC-driven disinformation and information-warfare campaigns in the Indo-Pacific.',
  },
  {
    title:
      'Insights from the Plan Blue 21 Game: Examining the Role of Sensing and Partner and Allied Contributions to Competition with Russia in the Arctic',
    authors:
      'Elizabeth M. Bartels, David A. Ochmanek, Nathaniel Edenfield, Brien Alkire, et al.',
    venue: 'RAND Corporation, Project AIR FORCE',
    year: 2023,
    type: 'report',
    url: 'https://apps.dtic.mil/sti/html/trecms/AD1216744/',
    description:
      'Reports insights from a wargame examining sensing capabilities and allied contributions in great-power competition with Russia in the Arctic.',
  },
  {
    title:
      'Telehealth Adoption by Mental Health and Substance Use Disorder Treatment Facilities in the COVID-19 Pandemic',
    authors: 'Jonathan Cantor, Ryan K. McBain, Aaron Kofner, Russell Hanson, Bradley D. Stein, Hao Yu',
    venue: 'Psychiatric Services',
    year: 2022,
    type: 'journal',
    url: 'https://doi.org/10.1176/appi.ps.202100191',
    description:
      'Finds telehealth availability among behavioral health facilities rose sharply in 2020–2021, yet large coverage gaps remained by January 2021.',
  },
  {
    title:
      'Patterns in Geographic Distribution of Substance Use Disorder Treatment Facilities in the US and Accepted Forms of Payment From 2010 to 2021',
    authors:
      'Jonathan H. Cantor, Maria DeYoreo, Russell Hanson, Aaron Kofner, David Kravitz, Adrian Salas, Bradley D. Stein, Kandice A. Kapinos',
    venue: 'JAMA Network Open',
    year: 2022,
    type: 'journal',
    url: 'https://doi.org/10.1001/jamanetworkopen.2022.41128',
    description:
      'Shows Medicare acceptance at SUD treatment facilities lagged other payment types from 2010–2021, reducing geographic access for older adults.',
  },
  {
    title: 'Availability and Accessibility of Mental Health Services in New York City',
    authors:
      'Joshua Breslau, Dionne Barnes-Proby, Mallika Bhandarkar, Jonathan H. Cantor, Russell Hanson, Aaron Kofner, Rosemary Li, Nipher Malika, Alexandra Mendoza-Graf, Harold Alan Pincus',
    venue: 'RAND Health Quarterly',
    year: 2022,
    type: 'journal',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9718065/',
    description:
      'Maps treatment facilities across New York City and identifies workforce shortages and disparities in access to mental health services.',
  },
  {
    title: "Russia's Growing Presence in Africa: A Geostrategic Assessment",
    authors:
      'Adam R. Grissom, Samuel Charap, Joe Cheravitch, Russell Hanson, Dara Massicot, Christopher A. Mouton, Jordan R. Reimer',
    venue: 'RAND Corporation, Project AIR FORCE',
    year: 2022,
    type: 'report',
    url: 'https://apps.dtic.mil/sti/html/trecms/AD1158240/',
    description:
      'Uses geospatial analysis to provide an integrated assessment of Russian involvement across Africa and its implications for U.S. strategy.',
  },
  {
    title: 'Road to Damascus: The Russian Air Campaign in Syria, 2015 to 2018',
    authors: 'Michael Simpson, Adam R. Grissom, Christopher A. Mouton, John P. Godges, Russell Hanson',
    venue: 'RAND Corporation',
    year: 2022,
    type: 'report',
    url: 'https://doi.org/10.7249/RRA1170-1',
    description:
      "Assesses Russia's employment of airpower in the Syrian civil war and the applicability of those lessons to future campaigns.",
  },
  {
    title: 'COVID-19 Air Traffic Visualization (CAT-V) Series',
    authors: 'Russell Hanson, Christopher A. Mouton, Adam R. Grissom, John P. Godges',
    venue: 'RAND Corporation',
    year: 2020,
    type: 'report',
    description:
      'A seven-part series introducing the CAT-V tool, which integrates epidemiological case data with commercial air-travel statistics to model COVID-19 transmission risk across global flight routes.',
    links: [
      { label: 'A New Tool for Analyzing Air Travel', url: 'https://www.rand.org/pubs/research_reports/RRA248-1.html' },
      { label: '1.5+ Daily Infected Passengers from China', url: 'https://www.rand.org/pubs/research_reports/RRA248-2.html' },
      { label: 'Cases ~37× Higher Than Reported in China', url: 'https://www.rand.org/pubs/research_reports/RRA248-3.html' },
      { label: 'Travel Restrictions by Per-Capita Infection & Air Traffic', url: 'https://www.rand.org/pubs/research_reports/RRA248-4.html' },
      { label: 'Transmission Risk to GCC Countries', url: 'https://www.rand.org/pubs/research_reports/RRA248-5.html' },
      { label: 'Worldwide Spread Accelerated Feb 19, 2020', url: 'https://www.rand.org/pubs/research_reports/RRA248-6.html' },
      { label: 'African Anchor States Face Higher Import Risk', url: 'https://www.rand.org/pubs/research_reports/RRA248-7.html' },
    ],
  },
  {
    title: 'OCEANS 17 Tabletop Exercise',
    authors: 'Elizabeth M. Bartels, Adam R. Grissom, Russell Hanson, Christopher A. Mouton',
    venue: 'RAND Corporation, National Defense Research Institute',
    year: 2019,
    type: 'report',
    url: 'https://apps.dtic.mil/sti/html/tr/AD1086294/',
    description:
      'Documents design and findings from a tabletop exercise on conducting air operations across combatant-command boundaries against transregional adversaries.',
  },
  {
    title: 'The Lick–Carnegie Exoplanet Survey: HD 32963 — A New Jupiter Analog Orbiting a Sun-Like Star',
    authors:
      'Dominick Rowan, Stefano Meschiari, Gregory Laughlin, Steven S. Vogt, R. Paul Butler, Jennifer Burt, Songhu Wang, Brad Holden, Russell Hanson, et al.',
    venue: 'The Astrophysical Journal',
    year: 2016,
    type: 'journal',
    url: 'https://doi.org/10.3847/0004-637X/817/2/104',
    description:
      'Reports the discovery of a Jupiter-analog exoplanet orbiting the Sun-like star HD 32963 via precision radial-velocity observations.',
  },
  {
    title: 'Six Planets Orbiting HD 219134',
    authors:
      'Steven S. Vogt, Jennifer Burt, Stefano Meschiari, R. Paul Butler, Gregory W. Henry, Songhu Wang, Brad Holden, Cyril Gapp, Russell Hanson, et al.',
    venue: 'The Astrophysical Journal',
    year: 2015,
    type: 'journal',
    url: 'https://doi.org/10.1088/0004-637X/814/1/12',
    description:
      'Reports six planetary candidates orbiting the nearby K-dwarf HD 219134, including five low-mass planets, via precision Doppler measurements.',
  },
  {
    title:
      'Capabilities and Performance of the Automated Planet Finder Telescope with the Implementation of a Dynamic Scheduler',
    authors: 'Jennifer Burt, Bradford Holden, Russell Hanson, Greg Laughlin, Steve Vogt, Paul Butler, Sandy Keiser, William Deich',
    venue: 'Journal of Astronomical Telescopes, Instruments, and Systems',
    year: 2015,
    type: 'journal',
    url: 'https://doi.org/10.1117/1.JATIS.1.4.044003',
    description:
      'Describes the on-sky performance of the Automated Planet Finder telescope after implementing a dynamic observation scheduler.',
  },
  {
    title: 'Autonomous Observing and Planet Discovery with the Automated Planet Finder (APF)',
    authors: 'Jennifer Burt, Russell Hanson, Bradford Holden, R. Paul Butler, Steven S. Vogt, Greg Laughlin',
    venue: 'American Astronomical Society Meeting 225',
    year: 2015,
    type: 'conference',
    url: 'https://ui.adsabs.harvard.edu/abs/2015AAS...22525827B/abstract',
    description:
      'Presents autonomous, software-driven observing and radial-velocity exoplanet detection with the Automated Planet Finder telescope.',
  },
  {
    title: 'The Lick–Carnegie Exoplanet Survey: Gliese 687 b — A Neptune-Mass Planet Orbiting a Nearby Red Dwarf',
    authors:
      'Jennifer Burt, Steven S. Vogt, R. Paul Butler, Russell Hanson, Stefano Meschiari, Eugenio J. Rivera, Gregory W. Henry, Gregory Laughlin',
    venue: 'The Astrophysical Journal',
    year: 2014,
    type: 'journal',
    url: 'https://doi.org/10.1088/0004-637X/789/2/114',
    description:
      'Describes the discovery of a Neptune-mass planet in a 38-day orbit around the nearby M-dwarf Gliese 687 via precision radial velocity.',
  },
  {
    title: 'A Four-Planet System Orbiting the K0V Star HD 141399',
    authors:
      'Steven S. Vogt, R. Paul Butler, Eugenio J. Rivera, Robert Kibrick, Jennifer Burt, Russell Hanson, Stefano Meschiari, Gregory W. Henry, Gregory Laughlin',
    venue: 'The Astrophysical Journal',
    year: 2014,
    type: 'journal',
    url: 'https://doi.org/10.1088/0004-637X/787/2/97',
    description:
      'Reports four planets orbiting the nearby K-type star HD 141399, including three inner giants and a Jupiter-like outer companion.',
  },
  {
    title: 'Achieving Autonomous Data Flow of the Automated Planet Finder (APF)',
    authors:
      'Jennifer Burt, Russell Hanson, Eugenio Rivera, Brad Holden, Steven S. Vogt, R. Paul Butler, Pamela Arriagada, Greg Laughlin',
    venue: 'Proc. SPIE 9152, Software and Cyberinfrastructure for Astronomy III',
    year: 2014,
    type: 'conference',
    url: 'https://doi.org/10.1117/12.2057074',
    description:
      'Presents the design and implementation of an autonomous data-flow pipeline for the Automated Planet Finder telescope.',
  },
];

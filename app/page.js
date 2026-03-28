import PortfolioItem from '@/components/PortfolioItem'

const webDesign = [
  {
    id: 1,
    href: 'https://andrefuel.com/uni-coursework/applied-art/film-promotion/index.html',
    image: '/images/fargo-unproccessed.png',
    alt: 'Collage of three screenshots of the website, one displaying a vector image of the Castle Cinema, the cinema where it is being screened and two mockups of the original poster, one made for a dark theme (and hence darker in color and more monochrome) and one for a light theme which is lighter and more colourful - both display a crime scene from Fargo where the police investigator Marge discovers a body in the snow after a car crash',
    title: 'Fargo',
    description: 'Website for a film re-run ad campaign',
  },
  {
    id: 2,
    href: 'https://andrefuel.com/dungeons-and-deadlines/',
    image: '/images/dungeons-unproccessed.png',
    alt: "Collage of two screenshots of a browser game website. Half of it is just the logo, which displays 'Dungeons and Deadlines' in a retro graffiti and geometrical style, while the other half is an illustration from the game which is a petrol station inside with the clerk made in a stripped down naive black and white style with thin lines",
    title: 'Dungeons and Deadlines',
    description: 'Roguelite RPG Browser Game',
  },
  {
    id: 3,
    href: 'https://erosed.eu',
    image: '/images/eros-unproccessed.png',
    alt: 'Screenshot of the Eros website with a header that has the EROS logo on the top left corner on a dark purple background and three menu items on the top right side while on the middle of the screenshot there is a big colour logo pill as a background image and an h1 that says get a grip on fear and disinformation along with a pink button that states see more',
    title: 'Eros',
    description: 'Website for a sex education NGO',
  },
  {
    id: 4,
    href: 'https://freestyle-cooking.org/',
    image: '/images/freestyle-unproccessed.png',
    alt: "Screenshot of the Freestyle Cooking website - a handful of kitchenware illustrations, a rack with a frying pan and a boiler and an 'oven' glove for each of the main cooking methods - an h1 that says 'welcome' along a paragraph that says 'We believe cooking means thinking about the future' and a footer with jars in a line",
    title: 'Freestyle Cooking',
    description: 'A cooking website for surviving the post-lockdown world.',
    bordered: true,
  },
]

const graphicDesign = [
  {
    id: 5,
    href: 'https://revdoesbeats.bandcamp.com/album/beatul-lui-sisif',
    image: '/images/sisif.png',
    alt: "A collage of two - a picture of the making of the cover on the left and the cover itself on the right. The finished cover displays some letters cut from cards from a cards game writing the title 'Beatul lui Sisif' in the centre of the cover with a beam of sunlight shining over the letters",
    title: 'Beatul Lui Sisif',
    description: 'Cover design for 18-track album of jazz, hip hop and electronic fusion.',
  },
  {
    id: 6,
    href: 'https://revdoesbeats.bandcamp.com/album/sp-ringtones',
    image: '/images/negativetones.png',
    alt: "The cover art of this beat tape are cut and paste collages - on the right there's a chop from a postcard from the lake Nova Scotia, along with a seagull from another magazine that 'drops' a few tags from a jazz magazine cut into blocks which say 'jazz' and 'funk' and 'beats'",
    title: 'springtones/NSA*',
    description: 'Digital release covers for a series of beat-tapes.',
  },
]

const music = [
  {
    id: 7,
    href: 'https://www.yoyaku.io/release/mbr002/',
    image: '/images/eternal-poet.png',
    alt: 'Cover art of the MBR0002 release - an illustration of a lake done in a fantasy black and white mid-complex illustration style on a vinyl disc, while the other half of the thumbnail features the back cover which features a tracklisting',
    title: 'Eternal Poet MBR002',
    description: '10" release on Misbits Recordings (feature).\u00a0',
    extras: (
      <p className="py-0 px-4">
        Artwork:{' '}
        <a href="https://glitch-shop.com/about" className="text-accent">
          Glitch Shop
        </a>
      </p>
    ),
  },
  {
    id: 8,
    href: 'https://revdoesbeats.bandcamp.com/album/unwind-2',
    image: '/images/unwind.png',
    alt: "Cover art of the beat tape featuring the name 'Unwind' on the right, and a hand working on the MPD which is the digital version of the Akai MPC sampler, and on the left the physical form of the record which is a CD with transparent plastic cover",
    title: 'Unwind',
    description: '18-track beat tape (self-released).',
    extras: (
      <p className="py-0 px-4">
        Artwork:{' '}
        <a href="https://glitch-shop.com/about" className="text-accent">
          Livia Falcaru
        </a>
      </p>
    ),
  },
]

function PortfolioSection({ title, items }) {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <h2 className="text-5xl font-bold mb-8">{title}</h2>
      <div className="flex flex-wrap justify-between">
        {items.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <header className="bg-primary text-white px-5 py-5">
        <nav>
          <ul className="flex gap-4 list-none">
            <li>
              <a href="#home" className="text-white no-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white no-underline">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="portfolio">
        <PortfolioSection title="Web Design" items={webDesign} />
        <PortfolioSection title="Graphic Design" items={graphicDesign} />
        <PortfolioSection title="Music" items={music} />
      </section>

      <footer className="bg-primary text-white px-5 py-5 text-center">
        <p>&copy; 2023 Andrei Dutulescu. All rights reserved.</p>
      </footer>
    </>
  )
}

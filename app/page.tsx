import FadeUp from "./components/FadeUp";
import BrandsAccordion, { BrandItem } from "./components/BrandsAccordion";

const bioParagraphDelays: (2 | 3)[] = [2, 2, 3, 3, 3];

const bioParagraphs = [
  "Over my 20-year career, I have spent more than a decade inside some of the world\u2019s most respected hospitality brands. Within these organizations, I learned how products scale, how engagement moves across teams and how to solve big business challenges with creative solutions.",
  "Since my early career in New York City, I\u2019ve lived and worked in South America and, most recently, Europe. This global movement gave me the opportunity to take my big-brand toolkit and apply it to local, growing companies. Moving between corporate structures and scrappy teams has made me really agile: I know how to think like an entrepreneur while raising teams to top standards.",
  "I believe good brands generate both emotional and financial value. To get there, my work is often centered on building the bridge between where a brand is and where the company needs to go. I\u2019ve done this by designing a premium business-class experience for a notoriously egalitarian airline, and by keeping a cruise line\u2019s brand narrative intact while launching in the middle of a pandemic, amongst others.",
  "My work spans industries, time zones, and cultures, but my approach remains the same: I bring calm to chaos, I listen deeply, and I deliver thoughtful work through collaboration.",
  "I grew up in coastal California and studied business at the University of Arizona before starting my career in branding at Miraval Resorts. Today I work with brands around the world from my home in a small mountain village in Spain. I\u2019m a lifelong learner, and currently embracing AI to improve workflows and research.",
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jessicawolff/" },
  { label: "Email", href: "mailto:hello@jesswolff.co" },
  { label: "WhatsApp", href: "https://wa.me/34633851467" },
];

const logos = [
  // { src: '/logos/charles-marlow.png', alt: 'Charles Marlow' },
  { src: "/images/brand2.png", alt: "JetBlue" },
  { src: "/images/brand3.png", alt: "Virgin Voyages" },
  { src: "/images/brand4.png", alt: "Starwood Hotels and Resorts" },
  { src: "/images/brand1.png", alt: "Mount Sinai" },
  // { src: '/logos/miraval.png', alt: 'Miraval' },
];

const testimonials = [
  {
    quote:
      "She is a dreamer, a planner, and a do-er that manifests thoughtful articulations of how a brand should look, act, feel, and be true to itself. I believe Jessica\u2019s biggest strength lies in how she materializes the brand in tangible ways...",
    author: "-Advertising Director",
  },
  {
    quote:
      "Jessica is a master brand strategist -- thoughtful, creative, clear, meaningful. There is no destination, no aircraft, no crewmember at JetBlue that is untouched by Jessica\u2019s work. Always willing to help, Jessica is a great collaborator and partner on the tough assignments.",
    author: "-Chief Communication Officer",
  },
];

const brands: BrandItem[] = [
  {
    name: "Charles Marlow",
    role: "Head of Brand and Marketing",
    description:
      "A decade in, a respected local estate agency needed to align its story and experience with its future ambitions. I led a comprehensive brand repositioning, including a custom website and booking engine. It was my first time working inside a family business, and I had to navigate a deeply passionate environment filled with many voices. My biggest win here wasn\u2019t just the creative output\u2014it was my ability to move the work forward. Ultimately, I took many disparate threads of passion and wove them into a beautiful, cohesive brand identity, bringing decisive momentum to a project that needed an anchor.",
  },
  {
    name: "Virgin Voyages",
    role: "B2B Engagement & Partnerships",
    description:
      "Launching a radically new cruise line is complex; trying to do it during the 2020 pandemic was an exercise in organized chaos. My role was to protect the brand narrative when the logistics of the world were falling apart. Managing a $5M+ co-op marketing budget and deep travel network partnerships, my focus was squarely on alignment. I bridged the gap between marketing and sales to ensure that, even in crisis mode, every external message and tactic stayed fiercely true to the promised guest experience.",
  },
  {
    name: "JetBlue",
    role: "Brand Strategy Manager",
    description:
      "JetBlue was proudly, famously egalitarian. The challenge was massive: how do you introduce a premium business-class product without alienating the core brand or the crew? I developed the name and core concept for JetBlue Mint\u00ae, connecting the dots between design, product, and service to make sure it felt premium but still inherently JetBlue. Alongside this, I guided a company-wide uniform redesign to build crewmember pride around this massive evolution. Seeing Mint become an internationally awarded experience taught me a vital lesson: you can completely pivot a company\u2019s commercial direction if you take the time to bring the culture along with you.",
  },
  {
    name: "Starwood Hotels",
    role: "Global Brand Management",
    description:
      "In a massive organization, the hardest part of the job isn\u2019t coming up with a good idea\u2014it\u2019s figuring out how to implement it across thousands of touchpoints without losing its soul. I learned how to drive change at scale by coordinating global pilot programs for core wellness initiatives like WestinWorkout, and by spearheading the worldwide relaunch of the Sheraton Club. It taught me how to untangle complex operational standards so that a high-level global vision actually works for the real people executing it on the ground.",
  },
  {
    name: "Miraval",
    role: "Marketing Coordinator",
    description:
      "This was my entry point into hospitality, and where I first fell in love with the hotel world. I joined just as the property was navigating a major post-acquisition transition. While my day-to-day involved managing ad agencies and creating on-property magazines, what I was really doing was learning my first major career lesson: how to fiercely protect a highly tactile, intimate guest experience while adapting to a much larger, shifting corporate strategy.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-bio bg-yellow" id="bio">
        <div className="container grid">
          <div className="bio-content">
            {bioParagraphs.map((paragraph, index) => (
              <FadeUp
                key={paragraph.slice(0, 20)}
                delay={bioParagraphDelays[index]}
                className="text-body-large"
              >
                <p>{paragraph}</p>
              </FadeUp>
            ))}

            <FadeUp delay={3} className="bio-currently">
              Currently working with brands across the US and EU.
            </FadeUp>

            <FadeUp delay={3} className="contact-links">
              {contactLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="cta-bracket text-meta"
                >
                  {item.label}
                </a>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-logos" id="logos">
        <div className="container">
          <FadeUp className="logos-wrapper">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="logo-img"
              />
            ))}
          </FadeUp>
        </div>
      </section>

      <section className="section-testimonials" id="testimonials">
        <div className="container grid">
          <FadeUp className="testimonial-divider" />

          {testimonials.map((testimonial, index) => (
            <FadeUp
              key={testimonial.author}
              delay={index === 0 ? undefined : 1}
              className="testimonial-item"
            >
              <p className="text-quote">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="testimonial-author text-meta">
                {testimonial.author}
              </div>
            </FadeUp>
          ))}

          <FadeUp className="testimonial-divider" />
        </div>
      </section>

      <section className="section-brands" id="brands">
        <div className="container grid">
          <BrandsAccordion title="Brands I've Shaped" items={brands} />
        </div>
      </section>
    </>
  );
}

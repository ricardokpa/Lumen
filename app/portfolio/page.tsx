/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import PasswordGate from "./PasswordGate";
import { COOKIE_NAME, isAuthed } from "./auth";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Portfolio | Jessica Wolff Huerta",
  robots: { index: false, follow: false },
};

const IMG = "/portfolio_images";

type Item =
  | {
      type?: "img";
      src: string;
      alt: string;
      w: number;
      mt?: number;
      push?: boolean;
      full?: boolean;
    }
  | {
      type: "video";
      src: string;
      w: number;
      mt?: number;
      push?: boolean;
      ratio?: string;
      full?: boolean;
    }
  | {
      type: "youtube";
      id: string;
      w: number;
      mt?: number;
      push?: boolean;
      full?: boolean;
    };

function Row({ items, center }: { items: Item[]; center?: boolean }) {
  return (
    <div className={`pf-row${center ? " pf-row--center" : ""}`}>
      {items.map((it, i) => {
        const style = {
          "--w": `${it.w}%`,
          "--mt": `${it.mt ?? 0}rem`,
        } as CSSProperties;
        const ratio = it.type === "video" && it.ratio;
        if (ratio) (style as Record<string, string>)["--ratio"] = ratio;
        const cls = [
          "pf-item",
          it.push && "pf-item--push",
          ratio && "pf-item--ratio",
          it.full && "pf-item--full",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={i} className={cls} style={style}>
            {(it.type === undefined || it.type === "img") && (
              <img src={it.src} alt={it.alt} loading="lazy" />
            )}

            {it.type === "video" && (
              <video
                src={it.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            )}

            {it.type === "youtube" && (
              <div className="pf-frame" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${it.id}?autoplay=1&mute=1&loop=1&playlist=${it.id}&controls=0&playsinline=1`}
                  title="Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SectionHeader(props: {
  kicker?: string;
  title: string;
  place?: string;
  roles: string;
  challenge: string;
  challengeLabel?: string | null;
}) {
  const {
    kicker,
    title,
    place,
    roles,
    challenge,
    challengeLabel = "The challenge",
  } = props;
  return (
    <header className={`pf-header${kicker ? "" : " pf-header--plain"}`}>
      <div>
        {kicker && <div className="pf-meta">{kicker}</div>}
        <h2 className="pf-title">{title}</h2>
        {place && <div className="pf-meta">{place}</div>}
        <div className="pf-roles" style={{ whiteSpace: "pre-line" }}>
          {roles}
        </div>
      </div>
      <div>
        {challengeLabel && <div className="pf-meta">{challengeLabel}</div>}
        <p className="pf-challenge">{challenge}</p>
      </div>
    </header>
  );
}

export default async function PortfolioPage() {
  const store = await cookies();
  if (!isAuthed(store.get(COOKIE_NAME)?.value)) {
    return <PasswordGate />;
  }

  return (
    <main className="pf">
      <div className="pf-inner">
        <section className="pf-section" id="charles-marlow">
          <SectionHeader
            kicker="Luxury villa portfolio"
            title="Charles Marlow"
            place="Mallorca & Ibiza"
            roles="Creative direction · Brand positioning · Styling · Copy"
            challenge="Bring two brands together under one cohesive visual identity without losing the essence of the different locations (Mallorca and Ibiza)."
          />

          <Row
            items={[
              {
                src: `${IMG}/palacio-orfeo-landscape.png`,
                alt: "Balcony view",
                w: 23,
                mt: 3,
              },
              {
                src: `${IMG}/sa-caxoita-portrait-l.png`,
                alt: "Villa exterior with ivy",
                w: 31,
              },
              {
                src: `${IMG}/palacio-orfeo-detail.png`,
                alt: "Poolside",
                w: 23,
                mt: 4,
              },
            ]}
          />

          <Row center items={[{ type: "youtube", id: "7q57CNIf0b0", w: 63 }]} />

          <img
            className="pf-script"
            src={`${IMG}/centered-wide-feature.png`}
            alt="A place to find home"
          />

          <Row
            items={[
              {
                src: `${IMG}/marlow-logo.png`,
                alt: "Marlow logo",
                w: 29,
                mt: 3,
              },
              {
                type: "video",
                src: `${IMG}/marlow-cat.mp4`,
                w: 32,
                ratio: "3 / 4",
                push: true,
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/charles-bedroom-arch.png`,
                alt: "Bedroom through an arch",
                w: 44,
                mt: 7,
              },
              {
                src: `${IMG}/charles-desk-corner.png`,
                alt: "Desk and chair by a curtain",
                w: 33,
              },
            ]}
          />

          <Row
            center
            items={[
              {
                type: "video",
                src: `${IMG}/charles-video-2.mp4`,
                w: 63,
                ratio: "16 / 9",
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/charles-balcony-sea.png`,
                alt: "Terrace over the sea",
                w: 30,
              },
              {
                src: `${IMG}/sa-caxoita-portrait.png`,
                alt: "Bathrobes and brass mirror",
                w: 46,
                mt: 3,
              },
            ]}
          />
        </section>

        <section className="pf-section" id="jetblue">
          <SectionHeader
            kicker="Airline"
            title="JetBlue"
            place="NYC"
            roles={
              "Product Concept · Creative Direction · Styling\nPartnership Development · Naming"
            }
            challenge="Create a contrarian brand concept, visual identity and experience for a new business class product from the ground up. Design, align and deliver the airline's first uniform refresh company-wide."
          />

          <Row
            items={[
              {
                src: `${IMG}/jetblue-mint-seat.png`,
                alt: "JetBlue Mint suite",
                w: 39,
                mt: 3,
              },
              {
                src: `${IMG}/jetblue-mint-logo.png`,
                alt: "JetBlue Mint logo",
                w: 31,
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/jetblue-sketch-1.png`,
                alt: "Uniform sketch, suit",
                w: 20,
              },
              {
                src: `${IMG}/jetblue-sketch-2.png`,
                alt: "Uniform sketch, dress",
                w: 16.8,
              },
              {
                src: `${IMG}/jetblue-sketch-3.png`,
                alt: "Uniform sketch, orange jacket",
                w: 31,
                push: true,
                mt: -2,
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/jetblue-terminal.png`,
                alt: "JetBlue terminal",
                w: 31,
                mt: 2,
              },
              {
                src: `${IMG}/jetblue-crew.png`,
                alt: "JetBlue crew in the new uniforms",
                w: 31,
              },
            ]}
          />
        </section>

        <section className="pf-section" id="upscape">
          <SectionHeader
            kicker="Active luxury travel"
            title="Upscape"
            place="Chile"
            roles="Photography · Graphic Design · Video Direction · Naming · Copy"
            challenge="Create a brand concept and launch via content and press."
          />

          <Row
            items={[
              {
                src: `${IMG}/media-21.png`,
                alt: "Chile mountains",
                w: 39,
                mt: 4,
              },
              { src: `${IMG}/dsc2076-1.png`, alt: "Horseback rider", w: 31 },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/milky-way-chile-outpost.jpg`,
                alt: "Tents under stars",
                w: 47,
              },
              {
                src: `${IMG}/media-25.png`,
                alt: "Desert mountains",
                w: 31,
                mt: -3,
              },
            ]}
          />

          <Row
            center
            items={[
              {
                type: "video",
                src: `${IMG}/outpost-philosophy.mp4`,
                w: 63,
                ratio: "16 / 9",
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/upscape-portrait.png`,
                alt: "Woman in a kitchen",
                w: 31,
                mt: 1,
              },
              {
                src: `${IMG}/upscape-ivy-building.png`,
                alt: "Ivy-covered building",
                w: 31,
                mt: -1,
              },
            ]}
          />
        </section>

        <section className="pf-section" id="brand-concepts">
          <SectionHeader
            title="Brand Concepts & Origination"
            roles="Select Photography · Illustration · Brand Concept Development · Website Build"
            challengeLabel={null}
            challenge="Naming, brand concepting, writing and capturing photo/video is second nature to me and I find joy in these practices on a daily basis."
          />

          <Row
            items={[
              {
                src: `${IMG}/brand-palms.png`,
                alt: "Palm trees",
                w: 39,
                mt: 4,
              },
              { src: `${IMG}/brand-beach.png`, alt: "Beach at sunset", w: 31 },
            ]}
          />

          <Row
            center
            items={[
              {
                type: "video",
                src: `${IMG}/brand-boat.mov`,
                w: 63,
                ratio: "16 / 9",
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/brand-baby-close.png`,
                alt: "Smiling toddler",
                w: 31,
                mt: 1,
              },
              {
                src: `${IMG}/brand-baby-window.png`,
                alt: "Toddler at a window",
                w: 31,
              },
            ]}
          />

          <Row
            center
            items={[
              {
                src: `${IMG}/somewhere-to-be-site.png`,
                alt: "Somewhere To Be website",
                w: 66,
              },
            ]}
          />

          <Row
            items={[
              {
                type: "video",
                src: `${IMG}/brand-butterflies.mov`,
                w: 24,
                mt: 7,
                ratio: "3 / 4",
              },
              {
                src: `${IMG}/brand-arch-tree.png`,
                alt: "Courtyard through an arch",
                w: 45,
              },
            ]}
          />

          <Row
            items={[
              {
                src: `${IMG}/small-island.png`,
                alt: "Small island on the water",
                w: 25,
                mt: 4,
              },
              {
                src: `${IMG}/brand-cove.png`,
                alt: "Cove seen through pine trees",
                w: 31,
              },
            ]}
          />
        </section>

        <footer className="pf-footer">
          <img src={`${IMG}/signature.png`} alt="" />
        </footer>
      </div>
    </main>
  );
}

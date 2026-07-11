

import Reveal from "@/components/Reveal";

const CARDS = [
  {
    ref: "REF. 22",
    title: "IP services companies",
    body: "Search, analytics, reverse engineering, and licensing support firms that need their expertise to be legible to buyers.",
  },
  {
    ref: "REF. 24",
    title: "Patent & IP law firms",
    body: "Boutiques and practice groups whose sites undersell the calibre of the work — prosecution, litigation, opinions, UPC.",
  },
  {
    ref: "REF. 26",
    title: "IP tech & SaaS vendors",
    body: "Platforms selling into law firms and corporate IP teams that need product pages a sceptical attorney will trust.",
  },
  {
    ref: "REF. 28",
    title: "Solo practitioners & advisors",
    body: "Independent counsel and retired IP executives turning a reputation into a practice, with a site that carries it.",
  },
];

export default function Serve() {
  return (
    <section id="field">
      <div className="sec-head">
        <span className="inid">(51) FIELD</span>
        <h2>Who we serve</h2>
      </div>
      <div className="sec-body">
        <div className="serve">
          {CARDS.map((card) => (
            <Reveal key={card.ref} className="serve-card">
              <span className="ref">{card.ref}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

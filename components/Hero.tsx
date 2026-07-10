"use client";

import { useState } from "react";

const LEGEND = [
  { ref: "10", label: "site" },
  { ref: "12", label: "message" },
  { ref: "14", label: "conversion" },
  { ref: "16", label: "proof" },
  { ref: "18", label: "visibility" },
  { ref: "20", label: "content" },
];

export default function Hero() {
  const [lit, setLit] = useState<string | null>(null);

  const partProps = (ref: string) => ({
    className: `fig-part${lit === ref ? " lit" : ""}`,
    onMouseEnter: () => setLit(ref),
    onMouseLeave: () => setLit(null),
  });

  return (
    <header className="hero" id="top">
      <div className="hero-text">
        <span className="inid">(54) TITLE OF THE STUDIO</span>
        <h1>
          Websites and content for the firms that protect <em>invention</em>.
        </h1>
        <div className="abstract">
          <span className="inid">(57) ABSTRACT</span>
          <p>
            Patentio designs websites and writes content exclusively for IP
            services companies and law firms. We speak the language of claims,
            dockets, and office actions natively — so your web presence reads
            like it was built by people who understand the work, because it
            was.
          </p>
        </div>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contact">
            Draft your filing
          </a>
          <a className="btn btn-ghost" href="#claims">
            See what we claim
          </a>
        </div>
      </div>

      <div className="hero-fig">
        <div className="fig-label">
          FIG. 1 — THE SYSTEM <span className="hint">(hover the parts)</span>
        </div>
        <div className="stamp">FIRST TO FILE</div>
        <svg
          className={lit ? "dimmed" : ""}
          viewBox="0 0 520 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Patent-style figure of a website with numbered callouts for site, message, conversion, proof, visibility, and content"
        >
          {/* 10 site */}
          <g {...partProps("10")}>
            <rect className="draw" x="90" y="70" width="300" height="220" fill="none" stroke="#16150F" strokeWidth="2" />
            <line className="draw" x1="90" y1="100" x2="390" y2="100" stroke="#16150F" strokeWidth="2" />
            <circle cx="106" cy="85" r="4" fill="none" stroke="#16150F" strokeWidth="1.5" />
            <circle cx="122" cy="85" r="4" fill="none" stroke="#16150F" strokeWidth="1.5" />
            <circle cx="138" cy="85" r="4" fill="none" stroke="#16150F" strokeWidth="1.5" />
            <line x1="192" y1="129" x2="230" y2="40" stroke="#16150F" strokeWidth="1" />
            <text x="236" y="36" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#1D4ED8">10</text>
          </g>
          {/* 12 message */}
          <g {...partProps("12")}>
            <rect className="draw d2" x="112" y="122" width="160" height="14" fill="none" stroke="#16150F" strokeWidth="1.5" />
            <rect className="draw d2" x="112" y="144" width="110" height="10" fill="none" stroke="#16150F" strokeWidth="1.5" />
            <line x1="112" y1="130" x2="52" y2="150" stroke="#16150F" strokeWidth="1" />
            <text x="30" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#1D4ED8">12</text>
          </g>
          {/* 20 content */}
          <g {...partProps("20")}>
            <line className="draw d2" x1="112" y1="178" x2="290" y2="178" stroke="#16150F" strokeWidth="1.5" />
            <line className="draw d2" x1="112" y1="192" x2="300" y2="192" stroke="#16150F" strokeWidth="1.5" />
            <line className="draw d2" x1="112" y1="206" x2="262" y2="206" stroke="#16150F" strokeWidth="1.5" />
            <path className="draw d3" d="M60 330 L84 306 L96 318 L72 342 L56 346 Z" fill="none" stroke="#16150F" strokeWidth="2" />
            <line x1="78" y1="324" x2="112" y2="200" stroke="#16150F" strokeWidth="1" strokeDasharray="3 4" />
            <text x="42" y="368" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#1D4ED8">20</text>
            <line x1="66" y1="344" x2="52" y2="356" stroke="#16150F" strokeWidth="1" />
          </g>
          {/* 14 conversion */}
          <g {...partProps("14")}>
            <rect className="draw d3" x="112" y="230" width="86" height="26" fill="none" stroke="#1D4ED8" strokeWidth="2" />
            <line x1="124" y1="243" x2="186" y2="243" stroke="#1D4ED8" strokeWidth="1.5" />
            <line x1="155" y1="256" x2="120" y2="310" stroke="#16150F" strokeWidth="1" />
            <text x="106" y="328" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#1D4ED8">14</text>
          </g>
          {/* 16 proof */}
          <g {...partProps("16")}>
            <rect className="draw d3" x="310" y="122" width="62" height="134" fill="none" stroke="#16150F" strokeWidth="1.5" />
            <line x1="320" y1="140" x2="362" y2="140" stroke="#16150F" strokeWidth="1.2" />
            <line x1="320" y1="154" x2="362" y2="154" stroke="#16150F" strokeWidth="1.2" />
            <line x1="320" y1="168" x2="352" y2="168" stroke="#16150F" strokeWidth="1.2" />
            <line x1="341" y1="122" x2="440" y2="60" stroke="#16150F" strokeWidth="1" />
            <text x="446" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#1D4ED8">16</text>
          </g>
          {/* 18 visibility */}
          <g {...partProps("18")}>
            <circle className="draw d4" cx="430" cy="315" r="26" fill="none" stroke="#16150F" strokeWidth="2" />
            <line className="draw d4" x1="448" y1="333" x2="473" y2="358" stroke="#16150F" strokeWidth="2.5" />
            <line x1="430" y1="289" x2="405" y2="252" stroke="#16150F" strokeWidth="1" />
            <text x="386" y="244" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#1D4ED8">18</text>
          </g>
        </svg>
        <div className="legend" role="list">
          {LEGEND.map(({ ref, label }) => (
            <button
              key={ref}
              className={`legend-item${lit === ref ? " on" : ""}`}
              role="listitem"
              onMouseEnter={() => setLit(ref)}
              onMouseLeave={() => setLit(null)}
              onFocus={() => setLit(ref)}
              onBlur={() => setLit(null)}
              onClick={() => setLit(ref)}
            >
              <b>{ref}</b>
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

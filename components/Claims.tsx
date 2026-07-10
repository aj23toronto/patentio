"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Claim = {
  num: string;
  title: string;
  preamble: React.ReactNode;
  details: string[];
};

const CLAIMS: Claim[] = [
  {
    num: "CLAIM 1 · INDEPENDENT",
    title: "Website design & build",
    preamble: (
      <>
        A website, comprising: <b>a clear statement of what your firm actually does</b>,
        credentials presented as evidence, and a build that is fast, mobile-first, and
        yours to own.
      </>
    ),
    details: [
      "practice and service pages structured the way clients search;",
      "attorney and expert bios that read as proof, not padding;",
      "matter and result pages formatted for a GC's five-minute scan;",
      "full handover of code, CMS, and domain — no lock-in.",
    ],
  },
  {
    num: "CLAIM 2 · DEPENDS ON 1",
    title: "Content generation",
    preamble: (
      <>
        The website of claim 1, further comprising{" "}
        <b>a steady output of substantive content</b> written by people fluent in
        prosecution, invalidity, FTO, and licensing.
      </>
    ),
    details: [
      "thought leadership and UPC / litigation commentary;",
      "case studies and matter write-ups, anonymised where needed;",
      "newsletters and LinkedIn programs in your firm's voice;",
      "editorial calendar reviewed with you each month.",
    ],
  },
  {
    num: "CLAIM 3 · DEPENDS ON 1",
    title: "Search visibility",
    preamble: (
      <>
        The website of claim 1, wherein pages are engineered so that{" "}
        <b>the clients you want can find you</b> for the practice areas, jurisdictions,
        and technologies you serve.
      </>
    ),
    details: [
      "keyword mapping built from how in-house counsel actually search;",
      "clean technical SEO: speed, structure, schema, sitemaps;",
      "jurisdiction and technology landing pages that rank;",
      "quarterly reporting in plain language, not vanity dashboards.",
    ],
  },
  {
    num: "CLAIM 4 · INDEPENDENT",
    title: "Brand & positioning",
    preamble: (
      <>
        A firm identity, comprising:{" "}
        <b>a name, voice, and visual system that distinguishes over the prior art</b> —
        the sea of interchangeable navy-blue firm sites.
      </>
    ),
    details: [
      "positioning workshops with your partners, not just your marketers;",
      "a messaging hierarchy: one sentence, one paragraph, one page;",
      "visual identity, templates, and deck systems that hold together;",
      "guidelines your team can actually follow without a designer.",
    ],
  },
];

export default function Claims() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="claims">
      <div className="sec-head">
        <span className="inid">(§) WHAT WE CLAIM</span>
        <h2>Services, drafted as claims</h2>
        <span className="hint">click a claim to read its dependent claims</span>
      </div>
      <div className="sec-body">
        <div className="claims">
          {CLAIMS.map((claim, i) => (
            <Reveal key={claim.num} className={`claim${open === i ? " open" : ""}`}>
              <button
                className="claim-head"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="claim-num">
                  {claim.num} <span className="plus">+</span>
                </span>
                <h3>{claim.title}</h3>
                <p className="claim-preamble">{claim.preamble}</p>
              </button>
              <div className="claim-detail">
                <div className="claim-detail-inner">
                  <ul>
                    {claim.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

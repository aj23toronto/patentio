"use client";

import { useMemo, useState } from "react";

const FOUNDER = "founder@patentioanalytics.com";
const KELLY = "kelly@patentioanalytics.com";

const FIRM_TYPES = [
  { value: "IP services company", label: "IP services co." },
  { value: "Patent / IP law firm", label: "IP law firm" },
  { value: "IP tech / SaaS vendor", label: "IP tech vendor" },
  { value: "Solo practitioner / advisor", label: "Solo / advisor" },
];

const SERVICES = [
  { value: "Website design & build", label: "Website", weeks: 6 },
  { value: "Content generation", label: "Content", weeks: 0 },
  { value: "Search visibility (SEO)", label: "SEO", weeks: 2 },
  { value: "Brand & positioning", label: "Brand", weeks: 3 },
];

const URGENCIES = ["This quarter", "Next quarter", "Just exploring"];

export default function ProposalBuilder() {
  const [firm, setFirm] = useState(FIRM_TYPES[0].value);
  const [selected, setSelected] = useState<string[]>([]);
  const [urgency, setUrgency] = useState(URGENCIES[0]);

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const { timeline, mailtoFounder, mailtoKelly } = useMemo(() => {
    const chosen = SERVICES.filter((s) => selected.includes(s.value));
    const weeks = chosen.reduce((sum, s) => sum + s.weeks, 0);
    const hasContent = selected.includes("Content generation");

    let timeline = "—";
    if (chosen.length) {
      if (weeks > 0 && hasContent) timeline = `~${weeks} weeks + ongoing`;
      else if (weeks > 0) timeline = `~${weeks} weeks`;
      else if (hasContent) timeline = "Ongoing retainer";
    }

    const subject = `Proposal request — ${firm}`;
    const body = [
      "Hello Patentio,",
      "",
      `We are a ${firm.toLowerCase()} interested in: ${
        chosen.length ? chosen.map((s) => s.value).join(", ") : "to be discussed"
      }.`,
      `Timing: ${urgency}.`,
      "",
      "Firm name:",
      "Website (if any):",
      "Anything else we should know:",
      "",
    ].join("\r\n");

    const query = `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return {
      timeline,
      mailtoFounder: `mailto:${FOUNDER}${query}`,
      mailtoKelly: `mailto:${KELLY}${query}`,
    };
  }, [firm, selected, urgency]);

  return (
    <section id="contact">
      <div className="sec-head">
        <span className="inid">(74) CORRESPONDENCE — DRAFT YOUR FILING</span>
        <h2>Tell us what to build</h2>
      </div>
      <div className="sec-body">
        <div className="builder">
          <div>
            <fieldset>
              <legend>(71) APPLICANT — your firm is a…</legend>
              <div className="chip-row">
                {FIRM_TYPES.map((t) => (
                  <label className="chip" key={t.value}>
                    <input
                      type="radio"
                      name="firm"
                      value={t.value}
                      checked={firm === t.value}
                      onChange={() => setFirm(t.value)}
                    />
                    <span>{t.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>(§) CLAIMS — what should we take on?</legend>
              <div className="chip-row">
                {SERVICES.map((s) => (
                  <label className="chip" key={s.value}>
                    <input
                      type="checkbox"
                      value={s.value}
                      checked={selected.includes(s.value)}
                      onChange={() => toggle(s.value)}
                    />
                    <span>{s.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>(22) URGENCY</legend>
              <div className="chip-row">
                {URGENCIES.map((u) => (
                  <label className="chip" key={u}>
                    <input
                      type="radio"
                      name="urg"
                      value={u}
                      checked={urgency === u}
                      onChange={() => setUrgency(u)}
                    />
                    <span>{u}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="filing">
            <div className="filing-head">
              <span>PROVISIONAL APPLICATION</span>
              <span>No. 2026-001</span>
            </div>
            <div className="filing-line">
              <span className="k">(71) APPLICANT</span>
              <span className="v">{FIRM_TYPES.find((t) => t.value === firm)?.label}</span>
            </div>
            <div className="filing-line">
              <span className="k">(§) CLAIMS</span>
              <span className="v">
                {selected.length ? (
                  selected.join(", ")
                ) : (
                  <span className="filing-empty">none selected yet</span>
                )}
              </span>
            </div>
            <div className="filing-line">
              <span className="k">(22) TIMING</span>
              <span className="v">{urgency}</span>
            </div>
            <div className="filing-line">
              <span className="k">EST. TIMELINE</span>
              <span className="v">{timeline}</span>
            </div>
            <a className="btn btn-primary" href={mailtoFounder}>
              File with {FOUNDER}
            </a>
            <span className="alt">
              or write to <a href={mailtoKelly}>{KELLY}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

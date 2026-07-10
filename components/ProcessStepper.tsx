"use client";

import { Fragment, useState } from "react";

const STAGES = [
  {
    tag: "FILING",
    title: "Discovery",
    body: "We interview your partners, read your matters, and map who you sell to. The brief is written from your practice, not a template.",
    weeks: "WEEK 1",
  },
  {
    tag: "EXAMINATION",
    title: "Design & draft",
    body: "Design directions and page copy arrive together. You mark them up like an office action; we respond with amendments until the record is clean.",
    weeks: "WEEKS 2–4",
  },
  {
    tag: "ALLOWANCE",
    title: "Build",
    body: "The approved design is built, tested on real devices, and wired for analytics. Nothing ships that you haven't signed off.",
    weeks: "WEEK 5",
  },
  {
    tag: "GRANT",
    title: "Launch & maintain",
    body: "We launch, hand over full ownership, and — if you retain us — keep the content engine running month after month.",
    weeks: "WEEK 6 →",
  },
];

export default function ProcessStepper() {
  const [stage, setStage] = useState(0);
  const current = STAGES[stage];
  const granted = stage === STAGES.length - 1;

  return (
    <section id="process">
      <div className="sec-head">
        <span className="inid">(22) PROSECUTION HISTORY</span>
        <h2>From filing to grant, in six weeks</h2>
        <span className="hint">click a stage to inspect it</span>
      </div>
      <div className="sec-body">
        <div className="timeline">
          {STAGES.map((s, i) => (
            <Fragment key={s.tag}>
              {i > 0 && <div className={`t-link${i <= stage ? " filled" : ""}`} />}
              <button
                className={`t-node${i === stage ? " active" : ""}${i < stage ? " done" : ""}`}
                onClick={() => setStage(i)}
              >
                {s.tag}
              </button>
            </Fragment>
          ))}
        </div>
        <div
          key={stage}
          className={`stage-panel stage-fade${granted ? " granted" : ""}`}
          aria-live="polite"
        >
          <span className="stage-tag">{current.tag}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          <span className="weeks">{current.weeks}</span>
        </div>
      </div>
    </section>
  );
}

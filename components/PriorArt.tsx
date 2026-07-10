import Reveal from "@/components/Reveal";

export default function PriorArt() {
  return (
    <section>
      <div className="sec-head">
        <span className="inid">(56) REFERENCES CITED</span>
        <h2>Distinguishing over the prior art</h2>
      </div>
      <div className="sec-body">
        <div className="split">
          <Reveal>
            <p>
              The prior art is well known: a generalist agency builds your firm a
              handsome site, then asks you to explain what an invalidity search is.
              Six months later the blog has two posts and the &quot;Insights&quot;
              page is dated last spring.
            </p>
            <p>
              We come from the IP world. Our writers have drafted claim charts and
              read file wrappers. That is the difference between content that fills
              a page and content a Head of IP forwards to their team.
            </p>
          </Reveal>
          <Reveal as="ul" className="distinguish">
            <li>every writer on your account has worked in or alongside IP practice;</li>
            <li>content is reviewed against your positioning before it is ever published;</li>
            <li>you own the site, the code, and every word — no lock-in, no hostage domains;</li>
            <li>pricing is fixed per scope, quoted before work begins.</li>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

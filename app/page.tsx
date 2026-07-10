import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Claims from "@/components/Claims";
import Serve from "@/components/Serve";
import ProcessStepper from "@/components/ProcessStepper";
import PriorArt from "@/components/PriorArt";
import ProposalBuilder from "@/components/ProposalBuilder";

export default function Home() {
  return (
    <div className="sheet">
      <Nav />

      <div className="biblio">
        <div>(12) DIGITAL STUDIO</div>
        <div>(45) Serving IP firms worldwide</div>
        <div>(73) Assignee: Your firm&apos;s reputation</div>
      </div>

      <Hero />
      <Claims />
      <Serve />
      <ProcessStepper />
      <PriorArt />
      <ProposalBuilder />

      <footer>
        <div>© 2026 PATENTIO</div>
        <div>ALL RIGHTS RESERVED · NO PROVISIONAL REQUIRED</div>
      </footer>
    </div>
  );
}

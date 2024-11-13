import Portfolio from "./portfolio-card"
import { portfolioShots } from "@/constants/portfolio-shots";


export default function PortfolioSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20" id="ui/ux">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            UI/UX Projects
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Find me on GitHub, LinkedIn, and email.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
          {
            portfolioShots.map((project,idx)=>(
              <Portfolio key={idx} details={project}/>
            ))
          }
          
        </div>
      </div>
    </section>
  );
}

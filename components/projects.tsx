
import projects from '@/constants/projects'
import Project from "./project"

export default function Projects() {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="repos">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my latest and greatest projects, both on GitHub and live on the web.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            projects.sort((a,b)=> a.order-b.order).map((project,idx)=>(
              <Project key={idx} project={project}/>
            ))
          }
          
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { DiAngularSimple, DiGit, DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiHasura, SiJest, SiNextdotjs, SiSpringboot, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { DiDatabase } from "react-icons/di";



const Skillsets = () => {
  return (
    <section className="w-full py-12 md:py-12 lg:py-12" id='skillset'>
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Skills</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            I have a diverse set of skills that allow me to tackle a wide range of web development projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <SiNextdotjs className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">NextJs</h3>
              <p className="text-sm text-muted-foreground">
              Proficient in developing dynamic and responsive user interfaces using NextJs.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <DiAngularSimple className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Angular</h3>
              <p className="text-sm text-muted-foreground">
              Proficient in developing dynamic and responsive user interfaces using Angular.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <DiReact className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">React</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in building dynamic and responsive user interfaces using React.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12 text-primary">
              <SiSpringboot className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Java Springboot</h3>
              <p className="text-sm text-muted-foreground">
              Proficient in developing robust and scalable backend services using Spring Boot.              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <DiNodejsSmall className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Node.js</h3>
              <p className="text-sm text-muted-foreground">
                Experienced in building scalable and efficient server-side applications with Node.js.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <SiTailwindcss className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Skilled in creating visually appealing and responsive designs using Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <DiDatabase className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Databases</h3>
              <p className="text-sm text-muted-foreground">
                Experienced in working with various databases, including MySQL, PostgreSQL, and MongoDB.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <DiGit className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Git</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in using Git for version control and collaborative development.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <SiVercel className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Vercel</h3>
              <p className="text-sm text-muted-foreground">
                Experienced in deploying and managing web applications on the Vercel platform.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <SiTypescript className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Typescript</h3>
              <p className="text-sm text-muted-foreground">
                Skilled in writing and running unit tests using the Jest testing framework.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
              <SiHasura className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Hasura GraphQL</h3>
              <p className="text-sm text-muted-foreground">
                Experienced in GraphQL & Hasura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skillsets
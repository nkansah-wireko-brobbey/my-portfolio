import Link from "next/link"
import { DiGit } from "react-icons/di"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Connect With Me</h2>
          <p className="text-muted-foreground md:text-lg">Find me on GitHub, LinkedIn, and email.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <SiGithub className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">GitHub</p>
              <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                /your-github-username
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <SiLinkedin className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">LinkedIn</p>
              <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                /in/your-linkedin-username
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <SiGmail className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Email</p>
              <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                your-email@example.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


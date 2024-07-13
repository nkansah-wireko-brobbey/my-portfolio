import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { BsGlobe2 } from "react-icons/bs"
import { DiGit } from "react-icons/di"
import { useRef } from "react"

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
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <DiGit className="h-8 w-8 text-muted-foreground" />
                <CardTitle>Weather App/Angular Signals</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              This Simple Weather App showcases Angular Signals, offering beautifully designed components that you can copy and paste into your apps.

              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <Link
                href="https://github.com/nkansah-wireko-brobbey/my-weather-app"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <DiGit className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://my-weather-app-alpha-six.vercel.app/home"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <BsGlobe2 className="h-4 w-4" />
                Live
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <DiGit className="h-8 w-8 text-muted-foreground" />
                <CardTitle>Message App / Angular - SocketIO</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              A Message App built with Angular and SocketIO, featuring beautifully designed components that you can copy and paste into your apps.
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <Link
                href="https://github.com/nkansah-wireko-brobbey/msg-app"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <DiGit className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://msg-app-eight.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <BsGlobe2 className="h-4 w-4" />
                Live
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <DiGit className="h-8 w-8 text-muted-foreground" />
                <CardTitle>Backend Message App/NodeJs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              A robust backend for the Message App built with Express & NodeJs, featuring beautifully designed components that you can copy and paste into your apps.
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <Link
                href="https://github.com/nkansah-wireko-brobbey/msg-box-backend"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <DiGit className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://github.com/nkansah-wireko-brobbey/msg-box-backend"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <BsGlobe2 className="h-4 w-4" />
                Live
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <DiGit className="h-8 w-8 text-muted-foreground" />
                <CardTitle>Movie Vault / NextJs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              A Movie Vault app built with NextJs, featuring beautifully designed components that you can copy and paste into your apps.
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <Link
                href="https://github.com/nkansah-wireko-brobbey/film_vault"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <DiGit className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://film-vault-iota.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <BsGlobe2 className="h-4 w-4" />
                Live
              </Link>
            </CardFooter>
          </Card>
          
        </div>
      </div>
    </section>
  )
}

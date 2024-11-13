import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from 'next/image'
import { SiDribbble } from "react-icons/si"
import Link from "next/link"
import { portfolioShots } from "@/constants/portfolio-shots"

type Props = typeof portfolioShots[number]

export default function Component({details}:{details :Props}) {
    return (
        <Card className="w-full max-w-md overflow-hidden">

            <Image
                src={details.imgUrl}
                className="w-full h-80 object-cover"
                alt="Project Screenshot"
                width={1240}
                height={786}
                priority={true}
            />

            <CardHeader>
                <CardTitle>{details.title}</CardTitle>
                <CardDescription>{details.briefDescription}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                   {details.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {
                        details.toolsUsed.map((tool)=><Badge key={tool}>{tool}</Badge>)
                    }
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href={details.shotsLink}>                
                <Button variant="outline">
                    <SiDribbble className="mr-2 h-4 w-4" />
                    UI Link
                </Button>
                </Link>
                <Link href={details.prototypeLink} target="_blank">  
                <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Prototype Link
                </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
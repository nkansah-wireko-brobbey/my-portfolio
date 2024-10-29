import Link from "next/link";
import { BsGlobe2 } from "react-icons/bs";
import { DiGit } from "react-icons/di";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

type Technology = {
  title: string;
  icon: string;
};

type ProjectMetaData = {
  title: string;
  description: string;
  gitHubLink: string;
  liveDemoLink: string;
  technologies: Technology[];
};



const Project = ({ project }: { project: ProjectMetaData }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <DiGit className="h-8 w-8 text-muted-foreground" />
            <CardTitle>{project.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
        
          <div className="flex gap-2 flex-wrap">
            {
              project.technologies.map((technology, idx) => (<Badge key={idx}>
                {technology.title}
              </Badge>)
              )
            }
          </div>
          <div className="flex gap-4 justify-start">
            <Link
              href={project.gitHubLink}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <DiGit className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={project.liveDemoLink}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <BsGlobe2 className="h-4 w-4" />
              Live
            </Link>
          </div>
        </CardFooter>

      </Card>
    </>
  );
};

export default Project;

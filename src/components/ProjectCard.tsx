import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({ title, description, imageUrl, githubLink, liveLink }: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional project details can go here */}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {githubLink && (
          <Button variant="outline" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        )}
        {liveLink && (
          <Button asChild>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

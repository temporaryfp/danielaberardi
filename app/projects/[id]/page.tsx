import { projects } from '../data';
import ProjectContent from './project-content';

// Generate static params for all projects
export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectContent project={project} />;
} 
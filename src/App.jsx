import { useState } from 'react';

import ProjectSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleAddProject = projectData => {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectedProject = (id) => {
    setProjectsState(prevState => {
      return { ...prevState, selectedProjectId: id };
    });
  };

  console.log('state', projectsState);

  let content;

  if (projectsState.selectedProjectId === undefined) {
    // UNDEFINED => We are 'doing nothing'.
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    // NULL => We are 'adding a new project'.
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else {
    content = <SelectedProject project={projectsState.selectedProjectId} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onSelectedProject={handleSelectedProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;

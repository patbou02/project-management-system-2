import { useState } from 'react';

import ProjectSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleAddProject = projectData => {
    setProjectsState(prevState => {
      const projectId = Math.floor(Math.random() * 99);
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

  const handleSelectProject = id => {
    setProjectsState(prevState => {
      return { ...prevState, selectedProjectId: id };
    });
  };

  const handleDeleteProject = () => {
    console.log('inside handleDeleteProject()', projectsState.projects);

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    });
  };

  const handleAddTask = text => {
    setProjectsState(prevState => {
      const taskId = Math.floor(Math.random() * 99999);
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: text
      };
      return {
        ...prevState,
        tasks: [ newTask, ...prevState.tasks ]
      };
    });
  };

  const handleDeleteTask = () => { console.log('App() handleDeleteTask =>', task) };

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;

  if (projectsState.selectedProjectId === undefined) {
    // UNDEFINED => We are 'doing nothing'.
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    // NULL => We are 'adding a new project'.
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;

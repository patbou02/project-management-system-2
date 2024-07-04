export default function SelectedProject({ project }) {
  console.log('SelectedProject', project)
  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
      </header>
      TASKS
    </div>
  );
}
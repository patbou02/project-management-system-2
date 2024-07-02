export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <p>
          <label>Title</label>
          <input type="text" />
        </p>
        <p>
          <label>Description</label>
          <textarea />
        </p>
        <p>
          <label>Due Date</label>
          <input type="date" />
        </p>
      </div>
    </div>
  );
}
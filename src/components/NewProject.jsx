import { useRef } from 'react';

import Input from './Input.jsx';

export default function NewProject({ onAdd }) {
  console.info('NewProject() - Adding new project');

  const title= useRef();
  const description= useRef();
  const dueDate= useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      console.log('nothing entered. Validation failed.');
      // SHOW ERROR MODAL
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" ref={title} />
        <Input label="Description" textarea ref={description} />
        <Input label="Due Date" type="date" ref={dueDate} />
      </div>
    </div>
  );
}
import { useState, useRef } from 'react';
import Modal from './Modal.jsx';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  const modal = useRef();

  const handleChange = e => setEnteredTask(e.target.value);

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex items-center gap-4">
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Did you forget to type in a task?</h2>
        <p className="text-stone-600 mb-4">Please make sure to type in a task.</p>
      </Modal>
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}
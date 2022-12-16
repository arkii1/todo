import React, { useState } from 'react'
import propTypes from 'prop-types'

function TaskForm({ active = true, taskData = {} }) {
  const [name, setName] = useState(taskData.name || '')
  const [description, setDescription] = useState(taskData.description || '')
  const [project, setProject] = useState(taskData.project || 'Project')
  const [priority, setPriority] = useState(taskData.priority || '')
  const [due, setDue] = useState(taskData.due || '')

  const handleNameChange = (e) => setName(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleProjectChange = (e) => setProject(e.target.value)
  const handlePriorityChange = (e) => setPriority(e.target.value)

  const handleDueChange = (e) => setDue(e.target.value)

  return (
    <form className="h-max py-4 flex flex-col gap-3">
      <input
        name="task-name"
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
        value={name}
        disabled={!active}
        onChange={handleNameChange}
      />
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Description"
        name="task-description"
        value={description}
        disabled={!active}
        onChange={handleDescriptionChange}
      />

      <select
        disabled={!active}
        className="select select-bordered"
        value={project}
        onChange={handleProjectChange}
      >
        <option disabled selected>
          {taskData.project || 'Project'}
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>

      <select
        disabled={!active}
        className="select select-bordered"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option disabled selected>
          {taskData.priority || 'Priority'}
        </option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>

      <input
        type="date"
        className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Select a date"
        value={due}
        disabled={!active}
        onChange={handleDueChange}
      />
      <input
        type="checkbox"
        checked={taskData.completed}
        className="checkbox"
      />

      <button type="button" className="btn">
        Create Task
      </button>
    </form>
  )
}

export default TaskForm

TaskForm.propTypes = {
  active: propTypes.bool,
  taskData: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    description: propTypes.string,
    project: propTypes.string,
    priority: propTypes.string,
    due: propTypes.string,
    completed: propTypes.bool,
  }),
}

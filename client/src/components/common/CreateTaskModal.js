/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

function CreateTaskModal() {
  const date = new Date()
  console.log(date)

  return (
    <>
      <label htmlFor="my-modal-4" className="btn">
        Create Task
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Name</h3>
          <form className="py-4 flex flex-col gap-3">
            <input
              name="task-name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Description"
              name="task-description"
            />

            <select className="select select-bordered">
              <option disabled selected>
                Project
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>

            <select className="select select-bordered">
              <option disabled selected>
                Priority
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
            />

            <button type="button" className="btn">
              Create Task
            </button>
          </form>
        </label>
      </label>
    </>
  )
}

export default CreateTaskModal

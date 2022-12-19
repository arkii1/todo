import React, { useMemo } from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'

import Modal from './Modal'
import TaskForm from './TaskForm'
import Checkbox from './Checkbox'

function TaskTableRow({
  id,
  name,
  project,
  description,
  due,
  priority,
  createdAt,
  completed = false,
}) {
  const key = useMemo(() => uniqid(), [])

  return (
    <tr key={key}>
      <td>{name}</td>
      <td>{project}</td>
      <td>
        <Modal
          title="Details"
          content={
            <TaskForm
              active={false}
              taskData={{
                id,
                name,
                description,
                project,
                priority,
                createdAt,
                due,
                completed,
              }}
            />
          }
        />
      </td>
      <td>{priority}</td>
      <td>{due}</td>
      <td>{createdAt}</td>
      <td>
        <Checkbox forName={key} startCompleted={completed} />
      </td>
      <td>
        {' '}
        <Modal
          title="Edit"
          content={
            <TaskForm
              active
              taskData={{
                id,
                name,
                description,
                project,
                priority,
                createdAt,
                due,
                completed,
              }}
            />
          }
        />
      </td>
      <td>
        <Modal
          title="Delete"
          content={<div>Are you sure you want to delete this task?</div>}
        />
      </td>
    </tr>
  )
}

export default TaskTableRow

TaskTableRow.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  project: propTypes.string.isRequired,
  priority: propTypes.string.isRequired,
  due: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  completed: propTypes.bool,
}

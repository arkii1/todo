export async function getTask(id) {
  const res = await fetch(`/task/get/${id}`)
  const json = await res.json()
  return json
}

export async function createTask(body) {
  const res = await fetch('/task/create', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function updateTask(id, body) {
  const res = await fetch(`/task/create/${id}`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function deleteTask(id) {
  const res = await fetch(`/task/delete/${id}`)
  return res.status
}

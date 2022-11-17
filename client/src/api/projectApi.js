export async function getProject(id) {
  const res = await fetch(`/project/get/${id}`)
  const json = await res.json()
  return json
}

export async function createProject(body) {
  const res = await fetch('/project/create', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function updateProject(id, body) {
  const res = await fetch(`/project/create/${id}`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function deleteProject(id) {
  const res = await fetch(`/project/delete/${id}`)
  return res.status
}

export async function getAllProjects() {
  const res = await fetch('/project/all')
  const json = await res.json()
  return json
}

const server = 'http://localhost:5000'

export async function createProject(body) {
  const res = await fetch(`${server}/project/create`, {
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
  const res = await fetch(`${server}/project/create/${id}`, {
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
  const res = await fetch(`${server}/project/delete/${id}`)
  return res.status
}

export async function getAllProjects() {
  const res = await fetch(`${server}/project/all`)
  const json = await res.json()
  return json
}

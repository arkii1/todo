export async function getTeam(id) {
  const res = await fetch(`/team/get/${id}`)
  const json = await res.json()
  return json
}

export async function createTeam(body) {
  const res = await fetch('/team/create', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function updateTeam(id, body) {
  const res = await fetch(`/team/create/${id}`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function deleteTeam(id) {
  const res = await fetch(`/task/team/${id}`)
  return res.status
}

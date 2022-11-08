export async function getUser(id) {
  const res = await fetch(`/user/get/${id}`)
  const json = await res.json()
  return json
}
export async function createUser(body) {
  const res = await fetch('/user/create', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function updateUser(id, body) {
  const res = await fetch(`/user/create/${id}`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return res.status
}

export async function deleteUser(id) {
  const res = await fetch(`/user/delete/${id}`)
  return res.status
}

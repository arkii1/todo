export async function getUser(id) {
  const res = await fetch(`/user/get/${id}`)
  const json = await res.json()
  return json
}
export function createUser() {
  console.log('NOT IMPLEMENTED')
}

export function updateUser() {
  console.log('NOT IMPLEMENTED')
}

export function deleteUser() {
  console.log('NOT IMPLEMENTED')
}

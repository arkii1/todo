export async function getUser(id) {
  const user = await fetch(`/user/get/${id}`)
  const json = await user.json()
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

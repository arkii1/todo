export async function getTask(id) {
  const res = await fetch(`/task/get/${id}`)
  const json = await res.json()
  return json
}

export function createTask() {
  console.log('NOT IMPLEMENTED')
}

export function updateTask() {
  console.log('NOT IMPLEMENTED')
}

export function deleteTask() {
  console.log('NOT IMPLEMENTED')
}

export async function getProject(id) {
  const res = await fetch(`/project/get/${id}`)
  const json = await res.json()
  return json
}

export function createProject() {
  console.log('NOT IMPLEMENTED')
}

export function updateProject() {
  console.log('NOT IMPLEMENTED')
}

export function deleteProject() {
  console.log('NOT IMPLEMENTED')
}

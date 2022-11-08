export async function getProject(id) {
  const project = await fetch(`/project/get/${id}`)
  const json = await project.json()
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

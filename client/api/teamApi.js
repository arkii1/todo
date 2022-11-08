export async function getTeam(id) {
  const res = await fetch(`/team/get/${id}`)
  const json = await res.json()
  return json
}

export function createTeam() {
  console.log('NOT IMPLEMENTED')
}

export function updateTeam() {
  console.log('NOT IMPLEMENTED')
}

export function deleteTeam() {
  console.log('NOT IMPLEMENTED')
}

export async function getTeam(id) {
  const team = await fetch(`/team/get/${id}`)
  const json = await team.json()
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

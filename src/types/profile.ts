export type ProfileTasksGroup = {
  name: string,
  tasks: ProfileTask[]
}

export type ProfileTask = {
  id: string,
  description: string,
  value: number,
  checked: boolean
}
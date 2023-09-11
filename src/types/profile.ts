export type ProfileTasksGroup = {
  name: string,
  tasks: ProfileTask[]
}

export type ProfileTask = {
  id: number,
  description: string,
  value: number,
  checked: boolean
}
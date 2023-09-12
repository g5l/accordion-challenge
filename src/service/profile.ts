import {ProfileTasksGroup} from "@/types/profile";
import {v4 as uuidv4} from "uuid";

export const fetchProfileTasksGroups = async (): Promise<Array<ProfileTasksGroup>> => {
  // TODO - Fix the cors error to use the API 
  // return await ProfileApi.fetchProfileTasksGroup().then(response => response.data);
  const groups = await fetch("https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress").then(res => res.json());
  return addUuidToTasks(groups);
};

const addUuidToTasks = (taskGroups: ProfileTasksGroup[]): ProfileTasksGroup[] => {
  return taskGroups.map(group => ({
    ...group,
    tasks: group.tasks.map(task => ({
      ...task,
      id: uuidv4()
    }))
  }));
};

export const calculateTasksPercentage = (profileTasksGroup: ProfileTasksGroup[]) => {
  const totalValue = profileTasksGroup.reduce((acc, group) => {
    return acc + group.tasks.reduce((groupAcc, task) => groupAcc + task.value, 0);
  }, 0);

  const checkedValue = profileTasksGroup.reduce((acc, group) => {
    return acc + group.tasks.reduce((groupAcc, task) => task.checked ? groupAcc + task.value : groupAcc, 0);
  }, 0);

  const percentage = (checkedValue * 100) / totalValue;
  return Math.round(percentage);
};
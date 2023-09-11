import {ProfileTasksGroup} from "@/types/profile";

export function calculateTasksPercentage(profileTasksGroup: ProfileTasksGroup[]) {
  const totalValue = profileTasksGroup.reduce((acc, group) => {
    return acc + group.tasks.reduce((groupAcc, task) => groupAcc + task.value, 0);
  }, 0);

  const checkedValue = profileTasksGroup.reduce((acc, group) => {
    return acc + group.tasks.reduce((groupAcc, task) => task.checked ? groupAcc + task.value : groupAcc, 0);
  }, 0);

  const percentage = (checkedValue * 100) / totalValue;
  return Math.round(percentage);
}
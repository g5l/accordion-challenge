'use client';
import React from 'react';
import {Container, Header, Icon, Title} from './styles';
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import {ProfileTask, ProfileTasksGroup} from "@/types/profile";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion";
import Checkbox from "@/components/Checkbox";
import {calculateTasksPercentage} from "@/service/profile";
import {CheckEvent} from "@/types/common";

type Props = {
  title: string,
  tasksGroups: ProfileTasksGroup[],
  onChange: (profileTasksGroup: ProfileTasksGroup[]) => void
}

const TasksWidget: React.FC<Props> = (props) => {

  const handleCheckboxChange = (event: CheckEvent) => {
    const updatedTasksGroups = props.tasksGroups.map(group => ({
      ...group,
      tasks: group.tasks.map(task => task.id === event.id ? {...task, checked: event.checked} : task)
    }));
    props.onChange(updatedTasksGroups);
  };

  const displayGroups = () => {
    return props.tasksGroups.map((tasksGroup, index) => {
      const isCompleted = tasksGroup.tasks.every((task) => task.checked);
      const icon = <Icon className={`fa-light fa-clipboard${isCompleted ? "-check" : ""}`}/>;
      return (
        <Accordion key={index} title={tasksGroup.name} isCompleted={isCompleted} icon={icon}>
          {displayTasks(tasksGroup.tasks)}
        </Accordion>
      );
    });
  };

  const displayTasks = (tasks: ProfileTask[]) => {
    return tasks.map((task) => (
      <Checkbox
        key={task.id}
        id={task.id}
        label={task.description}
        checked={task.checked}
        onChange={handleCheckboxChange}
      />
    ));
  };

  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        <ProgressBar percentage={calculateTasksPercentage(props.tasksGroups)}/>
        <AccordionGroup>
          {displayGroups()}
        </AccordionGroup>
      </Header>
    </Container>
  );
};

export default TasksWidget;
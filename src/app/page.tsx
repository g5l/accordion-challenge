'use client';
import {Container} from './styles';
import TasksWidget from "@/components/TasksWidget/TasksWidget";
import {ProfileTasksGroup} from "@/types/profile";
import {useEffect, useState} from "react";
import {fetchProfileTasksGroups} from "@/service/profile";

export default function Home() {
  const [tasksGroups, setTasksGroups] = useState<ProfileTasksGroup[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetchProfileTasksGroups();
        setTasksGroups(response);
      } catch (error) {
        console.error("Error fetching the Profile Tasks Group:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Container>
      <TasksWidget title="Lodgify Grouped Tasks" tasksGroups={tasksGroups} onChange={tasksGroups => setTasksGroups(tasksGroups)}/>
    </Container>
  );
}
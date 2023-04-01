import React from "react";
import TaskList from "../components/TaskList";
import Calendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import { Container, Paper } from "@mantine/core";

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Paper p="xl" shadow="xs" style={{ marginTop: "40px" }}>
        {/* <Calendar /> */}
        <TaskList tasks={tasks} />
      </Paper>
      <Navigation />
    </Container>
  );
};

export default Home;

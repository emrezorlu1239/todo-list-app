import React from "react";
import { View, FlatList, Text, StyleSheet, SafeAreaView } from "react-native";
import { useTasks } from "../context/TaskContext";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";

export default function Index() {
  const { tasks, loading, addTask, toggleComplete, deleteTask } = useTasks();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TaskInput onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleComplete} onDelete={deleteTask} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add one above!</Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#999",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#999",
    fontSize: 15,
  },
});
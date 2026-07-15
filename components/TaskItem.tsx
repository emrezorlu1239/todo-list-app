import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/task';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.checkboxArea} onPress={() => onToggle(task.id)}>
        <View style={[styles.checkbox, task.completed && styles.checkboxChecked]} />
        <Text style={[styles.title, task.completed && styles.titleCompleted]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  checkboxArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#4a90d9',
  },
  checkboxChecked: {
    backgroundColor: '#4a90d9',
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteText: {
    color: '#e05252',
    fontWeight: '600',
  },
});
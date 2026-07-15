# To-Do List App

A simple, clean to-do list app built with React Native and Expo. Tasks are stored persistently on the device using AsyncStorage, so they remain after closing and reopening the app.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persistent storage (tasks survive app restarts)

## Tech Stack

- React Native (Expo, SDK 54)
- TypeScript
- Expo Router
- AsyncStorage

## Getting Started

```bash
npm install
npx expo start
```

Then press `w` for web, or scan the QR code with the Expo Go app on your phone.

## Project Structure
app/            # Screens (Expo Router)
components/     # TaskInput, TaskItem
context/        # TaskContext (state management)
types/          # Task type definition
utils/          # AsyncStorage helpers

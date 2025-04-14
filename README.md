
# Frontend Tech Stack Guide

This project uses a modern frontend stack with a focus on performance, maintainability, and scalability. Below are the tools, libraries, and best practices we are adopting.

---

## 🚀 Tech Stack

- **Framework**: Vite + React + TypeScript
- **UI Library**: MUI Core + MUI Icons
- **State Management**: Zustand
- **Data Fetching**: React Query (@tanstack/react-query)
- **Performance**: React.lazy, react-lazy-load-image-component
- **Code Quality**: Naming conventions, constants file, memoization

---

## 📂 Folder Structure

Below is the recommended folder structure for this project:

```js
public/                             // Publicly accessible static files (e.g., favicon, manifest)
├── Favicon.svg                     // Favicon file
src/                                // Main source code directory
├── assets/                         // Static assets like fonts, icons, and images
│   ├── fonts/                      // Font files
│   ├── icons/                      // Icon files (SVGs, PNGs, etc.)
│   └── images/                     // Image files
├── components                      // Reusable UI components
│   ├── Navbar.tsx                  // Navigation bar component
│   ├── Footer.tsx                  // Footer component
│   └── Sidebar.tsx                 // Sidebar component
├── features/                       // Feature-specific code (organized by feature)
│   ├── counter/                    // Counter feature
│       ├── CounterView.tsx         // UI for the counter feature
│       ├── CounterService.ts       // Service logic for counter (e.g., API calls)
│       └── CounterViewModel.ts     // State management for counter
│   └── user/                       // User feature
│       ├── UserView.tsx            // UI for the user feature
│       ├── UserService.ts          // Service logic for user (e.g., API calls)
│       └── UserViewModel.tsx       // State management for user
├── layouts/                        // Layout components for different pages
│   ├── AuthLayout.tsx              // Layout for authentication pages
│   └── MainLayout.tsx              // Layout for main application pages
├── routes/                         // Application routing logic
│   └── AppRoutes.tsx               // Defines all app routes
├── styles/                         // Global and theme-specific styles
│   ├── theme/                      // Theme-related files
│       ├── Theme.ts                // Theme configuration
│       ├── ThemeProvider.tsx       // Theme provider for the app
│       ├── ThemeToggleButton.tsx   // Button to toggle themes
│       └── UseThemeMode.tsx        // Hook to manage theme mode
│   └── Main.css                    // Global CSS styles
├── utils/                          // Utility functions and helpers
│   └── constants.ts                // Centralized constants for the app
├── App.tsx                         // Root component of the application
├── Main.tsx                        // Entry point for rendering the app
├── vite-env.d.ts                   // TypeScript environment declarations for Vite
├── .gitignore                      // Git ignore file
├── .prettierignore                 // Prettier ignore file
├── .prettierrc                     // Prettier configuration file
├── eslint.config.js                // ESLint configuration file
├── index.html                      // Main HTML file for the app
├── package-lock.json               // Lock file for npm dependencies
├── package.json                    // Project metadata and dependencies
├── README.md                       // Project documentation
├── tsconfig.app.json               // TypeScript configuration for the app
├── tsconfig.json                   // Base TypeScript configuration
├── tsconfig.node.json              // TypeScript configuration for Node.js
├── vite.config.ts                  // Vite configuration file
``` 

This structure ensures scalability, maintainability, and a clear separation of concerns.

---

## ♽ Envorment Variables:
Vite exposes env variables under import.meta.env object as strings automatically.

To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:
```.env
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.
```tsx
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined
```

---


## ♽ Component Lifecycle:

In React function components, the lifecycle is handled differently than in class components. Instead of lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount, you use hooks—especially the useEffect hook.

### 1. Component Mount (componentDidMount):
- To run logic once when the component mounts:
```jsx
useEffect(() => {
  // Runs once on mount
  console.log("Component mounted");

  // Example: Fetch data
}, []);
```
---
### 2. Component Update (componentDidUpdate):
- To run logic when specific state or props change:
```jsx
useEffect(() => {
  // Runs when `count` changes
  console.log("Count updated:", count);
}, [count]);
```
 React checks the dependency array ([count]) and runs the effect if count has changed.

---
### 3. Component Unmount (componentWillUnmount):
- To clean up side effects (like removing event listeners, cancelling requests, etc.):
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(interval);
    console.log("Component unmounted");
  };
}, []);
```
---

### 4. Mount + Update Combined:
- To run on mount and every update:
```jsx
useEffect(() => {
  console.log("Runs on every render");
});
```
Note: No dependency array = runs on every render (not recommended unless needed).

---

## 📦 MUI and Icons Installation

Install MUI and Icons:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```
Link : [Material UI Official Documentation](https://mui.com/material-ui/getting-started/installation/)

---

### 3. State Management: Zustand

#### a. Install Zustand

```bash
npm install zustand
```
Link : [Zustand Official Documentation](https://zustand.docs.pmnd.rs/getting-started/introduction)

#### b. Create a Store

```ts
// src/features/counter/counterViewModel.ts
import { create } from 'zustand'

type CounterState = {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

#### c. Use the Store in a Component

```tsx
// src/features/counter/CounterView.tsx
import { useCounterStore } from './counterViewModel.ts'

const Counter = () => {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
    </div>
  )
}

export default Counter
```

---

### 4. Data Fetching: @tanstack/react-query

#### a. Install React Query

```bash
npm install @tanstack/react-query
```
Link : [@tanstack/react-query Official Documentation](https://tanstack.com/query/latest/docs/framework/react/installation)

#### b. (Optional) Install Devtools

```bash
npm install @tanstack/react-query-devtools
```

#### c. Setup Provider

```tsx
// main.tsx or index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
```

#### d. Create a Fetch Function

```ts
// src/features/user/userService.ts
import axios from 'axios'

export type User = {
  id: number
  name: string
  email: string
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  return response.data
}
```

#### e. Create Custom Hook

```ts
// features/user/userViewModel.tsx
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from './userService.ts'

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
```

#### f. Use in Component

```tsx
// features/user/UserView.tsx
import { useUsers } from './userViewModel.tsx'

const UserList = () => {
  const { data: users, isLoading, error } = useUsers()

  if (isLoading) return <p>Loading...</p>
  if (error instanceof Error) return <p>Error: {error.message}</p>

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}

export default UserList
```

#### g. Mutations (POST/PUT/PATCH/DELETE)

```ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type NewUser = {
  name: string
  email: string
}

const createUser = async (user: NewUser) => {
  const response = await axios.post('/api/users', user)
  return response.data
}

const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
```

---

### 5. React.lazy()

#### a. Benefits

- **Performance:** Load only when needed.
- **Code Splitting:** Smaller initial bundle.
- **UX:** Smoother interaction for heavy components.

Link : [React.lazy() Official Documentation](https://react.dev/reference/react/lazy)

#### b. Usage

```tsx
import React, { Suspense, lazy } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <div>
      <h1>React Lazy Loading</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  )
}

export default App
```

---

### 6. Lazy Loading Images

Using: `react-lazy-load-image-component`

#### a. Install

```bash
npm install react-lazy-load-image-component
```
Link : [react-lazy-load-image-component Medium](https://medium.com/@albertjuhe/an-easy-to-use-performant-solution-to-lazy-load-images-in-react-e6752071020c)

#### b. Example

```tsx
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const MyComponent = () => (
  <LazyLoadImage
    src="https://example.com/image.jpg"
    alt="Example Image"
    effect="blur"
    width="300"
    height="200"
  />
)
```

---

### 7. Memoization

Use `useMemo()` for expensive functions or ones that don't need to re-run every render.

---

### 8. Constants

Define constants in a dedicated `constant.ts` file.  
If you use same constant in multiple files, you can add it in a constant file and import it.

---

### 9. Naming Conventions

#### a. Folder Names (kebab-case)

- ✅ `components/`
- ❌ `Components/`

#### b. File Names

- React Components: `PascalCase` → `ButtonView.tsx`
- CustomHooks: `camelCase` → `useAuth.ts`

#### c. Variables & State

- Use clear, meaningful `camelCase` names
- Don't use `var` unless necessary, Use `let` or `const` instead
- Booleans: Prefix with `is`, `has`
- Arrays: Use plural → `users`, `productList`

#### d. Function Naming

- Action-oriented `camelCase` → `fetchUserData`, `handleSubmit`
- Event Handlers( Use `on`,`handle` prefix) → `onClick`, `handleFormSubmit`
- Getters( Use `get` prefix) → `getUserData`, `getProductList`
- Setters( Use `set` prefix) → `setUserData`, `setProductList`

#### e. Interfaces

Use `PascalCase`:

```ts
interface ButtonProps {
  isDisabled: boolean;
  color?: string;
}
```

---

That's it! Your frontend stack is clean, scalable, and efficient. 🚀

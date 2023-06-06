### Zustand

### Persisting data using Persist Middleware

The Persist middleware enables you to store your Zustand state in a storage (e.g., localStorage, AsyncStorage, IndexedDB, etc.), thus persisting its data.

```js
const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);
```

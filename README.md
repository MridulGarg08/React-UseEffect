# 🧪 React `useEffect` Event Listener Example

This project demonstrates how to use the `useEffect` hook in React to:

- Dynamically track window size
- Update the document title
- Mount/unmount a component with cleanup using a toggle button

---

## 📂 Project Structure

src/
├── Checkuseeffect.jsx // Parent component to toggle mount/unmount
├── Useeffecteventlistener.jsx // Component that handles window resize logic


---

## 🚀 Features

- 📏 Tracks window `height` and `width` using `window.innerHeight` / `innerWidth`
- 🪟 Updates in real-time as the user resizes the window
- 📛 Dynamically updates `document.title` as `Size: HEIGHT * WIDTH`
- 🧹 Adds/removes event listeners properly using `useEffect` cleanup
- 🔁 Demonstrates React's mounting and unmounting lifecycle via a toggle button

---

## 🔍 How It Works

### 1. `Useeffecteventlistener.jsx`
- On mount, adds a `resize` event listener to update state
- On unmount, removes the listener to prevent memory leaks
- A second `useEffect` updates the document title whenever dimensions change

useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

useEffect(() => {
  document.title = `Size: ${height} * ${width}`;
}, [height, width]);

2. Checkuseeffect.jsx
Contains a toggle button to mount/unmount the listener component

Helps visualize component lifecycle and cleanup

<button onClick={() => setShow(!show)}>
  {show ? "Unmount Component" : "Mount Component"}
</button>
{show && <Useeffecteventlistener />}

🧪 Demo

🛠️ Setup Instructions
Clone this repo or create a new React app:

npx create-react-app react-event-listener-demo
cd react-event-listener-demo

Add the components:

Replace App.js content with:

import Checkuseeffect from "./Checkuseeffect";

function App() {
  return <Checkuseeffect />;
}

export default App;

Add Checkuseeffect.jsx and Useeffecteventlistener.jsx in the same directory.
Start the app:

npm start

📌 Notes
This behavior is development-friendly — React Strict Mode will cause useEffect to run twice (mount/unmount/mount).

The event listener setup is safe for production because it includes cleanup on unmount.

🙋‍♂️ Author
Mridul Garg
Frontend Developer | React Enthusiast



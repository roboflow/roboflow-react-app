import "./App.css";
import Roboflow from "./components/Roboflow.jsx";

export default function App() {
  return (
    <main className="max-w-2xl mx-auto">
      Roboflow 🦝 + React ⚛️
      <div className="w-full h-full">
        <Roboflow modelName="mask-wearing" modelVersion="14" />
      </div>
    </main>
  );
}

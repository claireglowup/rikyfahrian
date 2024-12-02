import "./styles/App.css";

import { Header } from "./components/Header";
import { ProjectCard } from "./components/Project";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <ProjectCard />
      <Footer />
    </>
  );
}

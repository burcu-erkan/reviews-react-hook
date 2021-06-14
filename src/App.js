import Header from "./components/Header";
import "./styles.css";
import Main from "./components/Main";

export default function App() {
  return (
    <main>
      <section className="container">
        <Header />
        <Main />
      </section>
    </main>
  );
}

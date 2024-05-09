import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "./components/LoginForm"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Moma's auth app</h1>
      <LoginForm />
    </main>
  );
}

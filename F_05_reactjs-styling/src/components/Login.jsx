
import { useState } from "react";
import styles from "./Login.module.css";
import LibraryImage from "../assets/library.jpg";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const isLogin = activeTab === "login";

  function handleSubmit(event) {
    event.preventDefault();

    if (isLogin) {
      alert("Login form submitted! Authentication is not connected yet.");
    } else {
      alert("Sign Up form submitted! Account registration is not connected yet.");
    }
  }

  return (
    <main className={styles.loginCard}>
      <section className={styles.imagePanel}>
        <img
          className={styles.libraryImage}
          src={LibraryImage}
          alt="Library with books"
        />
      </section>

      <section className={styles.formPanel}>
        <div className={styles.formContent}>
          <h1 className={styles.greeting}>
            <strong>Hello,</strong> Welcome!
          </h1>

          <nav className={styles.tabs} aria-label="Authentication">
            <button
              className={isLogin ? styles.activeTab : styles.inactiveTab}
              type="button"
              onClick={() => setActiveTab("login")}
              aria-pressed={isLogin}
            >
              Login
            </button>

            <button
              className={!isLogin ? styles.activeTab : styles.inactiveTab}
              type="button"
              onClick={() => setActiveTab("signup")}
              aria-pressed={!isLogin}
            >
              SignUp
            </button>
          </nav>

          <form className={styles.loginForm} onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Enter your full name"
                aria-label="Full name"
                autoComplete="name"
                required
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              autoComplete="email"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              aria-label="Enter Password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              minLength={6}
              required
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm password"
                autoComplete="new-password"
                minLength={6}
                required
              />
            )}

            <button className={styles.loginButton} type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <p className={styles.orText}>Or</p>

          <div className={styles.socialButtons}>
            <button
              className={styles.googleButton}
              type="button"
              aria-label="Continue with Google"
              onClick={() => alert("Google sign-in is not connected yet.")}
            >
              <span className={styles.googleIcon}>G</span>
            </button>

            <button
              className={styles.facebookButton}
              type="button"
              aria-label="Continue with Facebook"
              onClick={() => alert("Facebook sign-in is not connected yet.")}
            >
              f
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

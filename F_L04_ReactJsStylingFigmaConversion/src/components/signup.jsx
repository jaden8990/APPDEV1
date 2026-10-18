
import styles from "./SignUp.module.css";
import logo from "../assets/logo.svg";

export default function SignUp({ onLogin }) {
    return (
        <main className={styles.signup}>
            {/* Left panel */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Start your journey
                    <br />
                    with <strong>Design Spacee</strong>
                    <br />
                    today.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>
                    figma.com/@designspacee
                </p>
            </section>

            {/* Right panel */}
            <section className={styles.right}>
                <form className={styles.form}>
                    <h2>Create Account</h2>

                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        autoComplete="name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        required
                    />

                    <button type="submit">Sign Up</button>

                        <p className={styles.login}>
                            Already have an account?{" "}
                            <a
                                href="#login"
                                onClick={(event) => {
                                    event.preventDefault();
                                    onLogin();
                                }}
                            >
                                Login Here
                            </a>
                        </p>
                </form>
            </section>
        </main>
    );
}

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar">
        <h1>HealthApp</h1>
        <div>
          <a href="/symptoms">Symptoms</a>
          <a href="/reminders">Reminders</a>
        </div>
      </nav>

      {/* body */}
      <main className="main">
        <h1>Your Personal Health Assistant</h1>
        <p>Check symptoms and set medication reminders — all in one place.</p>
        <div>
          <a href="/symptoms" className="button">Symptom Checker</a>
          <a href="/reminders" className="button">Medication Reminders</a>
        </div>
      </main>
    </div>
  );
}

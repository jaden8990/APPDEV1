import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left">
        <h1>ABOUT ME</h1>

        <div className="line"></div>

        <p className="quote">
          "Learning one step at a time is still progress."
        </p>
      </div>

      <div className="right">
        <p><strong>Full Name:</strong> Jaden B. Calimlim</p>
        <p><strong>Course and Year:</strong> BSIS 3</p>

        <hr />

        <p>
          Good day, My name is Jaden B. Calimlim from BSIS3. The biggest
          challenge I faced was coding specifically using GitHub since I wasn't
          very familiar with the workflow, especially when pushing or cloning
          repositories.
        </p>

        <p>
          I really admire how my sister codes and grasps instructions; seeing
          them at work makes me realize they have a bright future, and it makes
          me proud, which is why I want to learn too.
        </p>

        <p>
          I always get nervous during lab activities, worrying that I might end
          up stuck and unable to do anything because I don't know where to
          start. However, my sibling told me I need to learn while at home
          since they can't help me in person due to the distance.
        </p>

        <p>
          I haven't tried Java yet, so this is new knowledge for me. What I
          learned today went beyond just coding; I realized that I shouldn't
          just listen passively but should actively participate as well.
        </p>

        <div className="funfact">
          <h3>Fun Fact</h3>
          <p>I think I'm good at hiding my emotions.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      tech: false,
      art: false,
      music: false,
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.entries(formData.interests)
    .filter(([_, checked]) => checked)
    .map(([key]) => key);

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <hr />

      <form onSubmit={handleSubmit}>
        <h2>Newsletter Signup</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <fieldset>
          <legend>Select your interests:</legend>

          <label>
            <input
              type="checkbox"
              name="tech"
              checked={formData.interests.tech}
              onChange={handleChange}
            />
            Technology
          </label>

          <label>
            <input
              type="checkbox"
              name="art"
              checked={formData.interests.art}
              onChange={handleChange}
            />
            Art
          </label>

          <label>
            <input
              type="checkbox"
              name="music"
              checked={formData.interests.music}
              onChange={handleChange}
            />
            Music
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you, {formData.name}, for signing up!</h3>
          {selectedInterests.length > 0 && (
            <p>Your interests: {selectedInterests.join(", ")}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;

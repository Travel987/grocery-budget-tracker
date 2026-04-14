function About() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>About Grocery Budget Tracker</h1>
        <p>
          Grocery Budget Tracker is a simple React application designed to help
          users manage and track their grocery spending in an organized way.
        </p>
      </div>

      <div className="card">
        <h2>Purpose</h2>
        <p>
          The purpose of this app is to give users an easy way to set a budget,
          add grocery items with prices, and monitor how much they have spent.
          It helps users stay within their budget and make better spending
          decisions.
        </p>
      </div>

      <div className="card">
        <h2>Features</h2>
        <ul>
          <li>Set a grocery budget</li>
          <li>Add items with prices</li>
          <li>Remove items from the list</li>
          <li>View total spending</li>
          <li>See remaining budget in real time</li>
        </ul>
      </div>

      <div className="card">
        <h2>Technologies Used</h2>
        <ul>
          <li>React (components, state, props)</li>
          <li>JavaScript (ES6)</li>
          <li>CSS for styling</li>
          <li>React Router for navigation</li>
        </ul>
      </div>

      <div className="card">
        <h2>Project Information</h2>
        <p>
          This project was built as part of the LaunchCode Unit 1 curriculum. It
          demonstrates core React concepts including component structure, state
          management, event handling, and conditional rendering.
        </p>
      </div>
    </div>
  );
}



export default About;
import logo from './logo.svg';
import './App.css';
import Header from './Header';



const QuestionCard = ({ title, tags, votes, answers, views }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h4>{title}</h4>
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              padding: "5px 10px",
              background: "#e1ecf4",
              color: "#39739d",
              borderRadius: "3px",
              fontSize: "12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p>
        <strong>{votes}</strong> votes • <strong>{answers}</strong> answers • <strong>{views}</strong> views
      </p>
    </div>
  );
};

/* Styles */
const sidebarStyles = {
  width: "20%",
  backgroundColor: "#f8f9fa",
  padding: "20px",
  boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
};

const navItemStyles = {
  padding: "10px 0",
  cursor: "pointer",
  fontWeight: "500",
  color: "#333",
};

const teamButtonStyles = {
  marginTop: "20px",
  padding: "10px",
  backgroundColor: "#f48024",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const mainStyles = {
  flex: 1,
  padding: "20px",
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const searchBarStyles = {
  width: "70%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

const askQuestionButtonStyles = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const sectionHeaderStyles = {
  fontSize: "18px",
  marginBottom: "10px",
  fontWeight: "600",
};

const questionCardStyles = {
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "15px",
  marginBottom: "15px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const questionTitleStyles = {
  fontSize: "16px",
  marginBottom: "10px",
  color: "#0074cc",
  cursor: "pointer",
  textDecoration: "none",
};

const tagContainerStyles = {
  display: "flex",
  gap: "10px",
  margin: "10px 0",
};

const tagStyles = {
  padding: "5px 10px",
  backgroundColor: "#e1ecf4",
  color: "#39739d",
  borderRadius: "3px",
  fontSize: "12px",
};

const questionStatsStyles = {
  fontSize: "14px",
  color: "#555",
};

const rightSidebarStyles = {
  width: "20%",
  backgroundColor: "#f8f9fa",
  padding: "20px",
  boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
};

const rightSidebarHeaderStyles = {
  fontSize: "16px",
  marginBottom: "10px",
  fontWeight: "600",
};

const blogItemStyles = {
  marginBottom: "10px",
  cursor: "pointer",
  color: "#0074cc",
};

const customFilterButtonStyles = {
  padding: "10px",
  backgroundColor: "#6c757d",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};


function App() {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#fdfdfd" }}>
      {/* Sidebar */}
      <aside style={sidebarStyles}>
        <h2 style={{ color: "#f48024", marginBottom: "20px" }}>StackOverflow</h2>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Home", "Questions", "Tags", "Users", "Collectives", "Jobs"].map((item, idx) => (
              <li key={idx} style={navItemStyles}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <button style={teamButtonStyles}>+ Create a team</button>
      </aside>

      {/* Main Content */}
      <main style={mainStyles}>
        {/* Header */}
        <header style={headerStyles}>
          <input type="text" placeholder="Search your answers here..." style={searchBarStyles} />
          <button style={askQuestionButtonStyles}>Ask Question</button>
        </header>

        {/* Questions Section */}
        <section>
          <h3 style={sectionHeaderStyles}>Top Questions</h3>
          {[1, 2].map((_, idx) => (
            <QuestionCard
              key={idx}
              title="I am not able to use view binding in activity in Kotlin android where I have also used companion object"
              tags={["Android", "Kotlin", "Android-Activity", "Android-Viewbinding", "Companion-Object"]}
              votes={7}
              answers={7}
              views={7}
            />
          ))}
        </section>
      </main>

      {/* Right Sidebar */}
      <aside style={rightSidebarStyles}>
        <div>
          <h3 style={rightSidebarHeaderStyles}>The Overflow Blog</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={blogItemStyles}>Podcast 354: Building for AR...</li>
            <li style={blogItemStyles}>Beta release of Collectives...</li>
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3 style={rightSidebarHeaderStyles}>Custom Filter</h3>
          <button style={customFilterButtonStyles}>Add Custom Filters</button>
        </div>
      </aside>
    </div>
  );
}

export default App;

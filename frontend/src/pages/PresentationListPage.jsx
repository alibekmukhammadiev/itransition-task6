import { useEffect, useState } from "react";
import { getPresentations } from "../api/api";

function PresentationListPage() {
  const nickname = localStorage.getItem("nickname");
  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    getPresentations().then(setPresentations);
  }, []);

  function handleCreate() {
    const newPresentation = {
      title: prompt("Enter presentation title:"),
      author: nickname,
      uploaded: new Date().toLocaleDateString("en-GB"),
    };

    if (newPresentation.title) {
      setPresentations([newPresentation, ...presentations]);
    }
  }

  function handleJoin(presentation) {
    return presentation
  }

  return (
    <div className="container mt-5">
      <h2>All Presentations</h2>
      <p className="text-muted">Welcome, {nickname}!</p>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search..."
        />
        <button className="btn btn-success ms-3" onClick={handleCreate}>
          + Create Presentation
        </button>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {presentations.map((p, idx) => (
            <tr
              key={idx}
              onClick={() => handleJoin(p)}
              style={{ cursor: "pointer" }}
            >
              <td>{p.title}</td>
              <td>{p.author}</td>
              <td>{p.uploaded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PresentationListPage;

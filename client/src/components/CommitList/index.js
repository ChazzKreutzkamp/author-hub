import React from "react";

const CommitList = ({ commits }) => {
  return (
    <div>
      {/* If there ARE commits */}
      {!!commits && commits.length ? (
        <div className="card mb-3">
          <div className="card-header">
            <span className="text-dark">Commits</span>
          </div>
          <div className="card-body">
            {commits &&
              commits.map((commit, index) => (
                <div className="pill mb-3" key={commit._id}>
                  {commit.commitType === "Suggestion" ? (
                    <h4
                      style={{
                        borderBottom: "dashed",
                        borderBottomWidth: "3px",
                        borderBottomColor: "var(--tertiary)",
                      }}
                    >
                      {index + 1}. {commit.commitType}
                    </h4>
                  ) : (
                    <h4
                      style={{
                        borderBottom: "dashed",
                        borderBottomWidth: "3px",
                        borderBottomColor: "var(--dark)",
                      }}
                    >
                      {index + 1}. {commit.commitType}
                    </h4>
                  )}

                  <h5>{commit.commitText}</h5>
                  <p>
                    {commit.username} on {commit.createdAt}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CommitList;

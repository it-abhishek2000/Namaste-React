const UserStats = ({ res }) => {
    return (
      <>
        <div className="container-fluid mt-2" style={{ textAlign: "center" }}>
          <div className="row">
            <div className="col-sm-12 col-md-6 mt-3">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${res.login}`}
                alt="ongoing-stat-divya"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-md-6 mt-3">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${res.login}&layout=compact`}
                alt="ongoing-streak-divya"
                className="img-fluid"
              />
            </div>
            </div>
            <div className="col">
            <div className="col-sm-12 col-md-6 mt-3">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs?username=${res.login}&layout=compact`}
                alt="ongoing-lang-divya"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  export default UserStats;
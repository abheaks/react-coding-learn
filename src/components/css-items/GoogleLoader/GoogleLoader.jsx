import "./GoogleLoader.css";
const GoogleLoader = ({ children }) => {
  return (
    <div className="g-loader-container">
      <div className="g-loader-loader">
        <svg className="g-loader-circular" viewBox="25 25 50 50">
          <circle
            className="g-loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default GoogleLoader;

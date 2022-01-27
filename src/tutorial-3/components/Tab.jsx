const Tab = ({ activeTab, onClick, id, title, description }) => {
  const labelClick = () => {
    onClick(id);
  };

  return (
    <div className={`tab ${activeTab ? "active" : ""}`}>
      <input id="tab-one" type="checkbox" name="tabs" />
      <label onClick={labelClick} htmlFor="tab-one">
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tab;

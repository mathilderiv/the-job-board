const Jobs = (props) => {
  return (
    <div className={props.color}>
      <h1> {props.title}</h1>

      {props.contractType}
      {props.country}
      {props.city}
    </div>
  );
};

export default Jobs;

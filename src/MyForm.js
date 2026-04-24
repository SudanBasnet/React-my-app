export const Myform = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form action="" className="card" onSubmit={handleOnSubmit}>
      <div className="mb-3 mt-3 ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="name"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

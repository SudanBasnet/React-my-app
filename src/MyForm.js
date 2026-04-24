export const Myform = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    const str = e.target.value;
    console.log(str);
  };
  return (
    <form action="" className="card" onSubmit={handleOnSubmit}>
      <div className="mb-3 mt-3 ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="name"
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

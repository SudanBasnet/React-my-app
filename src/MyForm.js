import { useRef } from "react";

export const Myform = () => {
  const addressRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(addressRef.current.value);
  };
  const handleOnChange = (e) => {
    const str = e.target.value;
    console.log(str);
  };

  return (
    <form action="" className="card" onSubmit={handleOnSubmit}>
      <div className="mb-3 mt-3 ">
        {/* <input
          type="text"
          className="form-control mb-3"
          required
          placeholder="name"
          onChange={handleOnChange}
        /> */}
        <input
          type="text"
          className="form-control"
          required
          placeholder="address"
          ref={addressRef}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

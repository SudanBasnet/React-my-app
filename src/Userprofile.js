import image from "./assets/image.avif";

export const UserProfile = () => {
  //   const cssStyle = { color: "red", fontSize: "3rem" };
  //   return <div style={cssStyle}>hey there</div>;
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="" width="150px" height="150px" />
      </div>
      <div className="info">
        <h1 className="text-danger">Sudan Basnet</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
          quos dolorum velit hic laboriosam ipsa minima reiciendis similique ea
          ipsam corrupti dolore consequuntur. Cupiditate id accusantium, iure
          excepturi mollitia quod!
        </p>
        <img src="./coding.avif" alt="" width="100%" />
      </div>
    </div>
  );
};

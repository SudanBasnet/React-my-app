const Profile = ({ nameProps, bio }) => {
  //   const { nameProps, bio } = props;
  //   console.log(props);
  return (
    <div>
      <h1>{nameProps}</h1>
      <hr />
      <div> {bio}</div>
    </div>
  );
};

export default Profile;

export const UserBio = () => {
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat odio
      eligendi tempore obcaecati sed alias ex illum sint aut unde provident
      consectetur necessitatibus, aliquam, dicta fuga, voluptate officia quidem.
      Beatae?
    </div>
  );
};

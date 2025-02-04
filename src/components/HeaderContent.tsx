import { Link } from 'react-router-dom';
const HeaderContent = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </>
  );
};

export default HeaderContent;

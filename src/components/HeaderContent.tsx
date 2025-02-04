import { Link } from 'react-router-dom';
const HeaderContent = () => {
  return (
    <header className="flex min-h-[40px] items-center justify-between border-b border-gray-200 px-[40px] py-[10px]">
      <Link to="/" className="text-xl font-bold text-black">
        React Blog
      </Link>
      <div className="flex gap-4 text-gray-400">
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </header>
  );
};

export default HeaderContent;

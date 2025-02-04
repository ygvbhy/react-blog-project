import { Link } from 'react-router-dom';

const FooterContent = () => {
  return (
    <footer className="flex min-h-[40px] justify-center bg-gray-200 px-[20px] py-[40px] text-center">
      <div className="flex gap-4 text-gray-400">
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
        <button>Dark</button>
      </div>
    </footer>
  );
};

export default FooterContent;

import { useState } from 'react';

const PostList = () => {
  const [selectMenu, setSelectMenu] = useState('전체');

  const handleSelectMenu = (menu: string) => {
    setSelectMenu(menu);
  };

  return (
    <>
      <div className="flex">
        <div>carousel</div>
      </div>
      <div className="mx-auto my-0 flex max-w-[680px] cursor-pointer gap-3 px-[20px] pb-0 pt-[48px] text-gray-400">
        <div
          onClick={() => handleSelectMenu('전체')}
          className={selectMenu === '전체' ? 'text-black' : ''}
        >
          전체
        </div>
        <div
          onClick={() => handleSelectMenu('나의 글')}
          className={selectMenu === '나의 글' ? 'text-black' : ''}
        >
          나의 글
        </div>
        <div
          onClick={() => handleSelectMenu('Frontend')}
          className={selectMenu === 'Frontend' ? 'text-black' : ''}
        >
          Frontend
        </div>
        <div
          onClick={() => handleSelectMenu('Backend')}
          className={selectMenu === 'Backend' ? 'text-black' : ''}
        >
          Backend
        </div>
        <div
          onClick={() => handleSelectMenu('Web')}
          className={selectMenu === 'Web' ? 'text-black' : ''}
        >
          Web
        </div>
        <div
          onClick={() => handleSelectMenu('Native')}
          className={selectMenu === 'Native' ? 'text-black' : ''}
        >
          Native
        </div>
      </div>
      <div className="mx-auto min-h-[90vh] max-w-[680px] p-5 text-left leading-[24px]">
        {[...Array(10)].map((n) => {
          return (
            <div className="border-t border-gray-200 py-[24px]" key={n}>
              <a href="" className="text-black">
                <div className="flex items-center gap-2">
                  <div className="h-[36px] w-[36px] rounded-[50%] bg-gray-200"></div>
                  <div className="text-gray-400">email@email.com</div>
                  <div className="text-gray-400">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
                <div className="mx-0 my-[14px] font-semibold">제목</div>
                <div className="text-gray-400">내용</div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostList;

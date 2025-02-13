const Profile = () => {
  return (
    <>
      <div className="mx-auto flex max-w-[680px] items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-4">
          <div className="h-[72px] w-[72px] rounded-full bg-gray-200"></div>
          <div>
            <div>이름</div>
            <div className="pt-1">이메일</div>
          </div>
        </div>
        <div className="cursor-pointer text-gray-400 underline">로그아웃</div>
      </div>
      <div className="mx-auto min-h-[90vh] max-w-[680px] p-5 text-left leading-[24px]">
        <div className="rounded-[20px] border p-6 text-center text-gray-400">
          게시글이 없습니다.
        </div>
      </div>
    </>
  );
};

export default Profile;

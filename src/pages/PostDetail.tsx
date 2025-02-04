const PostDetail = () => {
  return (
    <div className="mx-auto my-0 min-h-[90vh] max-w-[680px] p-5 text-left leading-[24px]">
      <div className="relative border-t border-gray-200 py-[24px]">
        <div className="my-[16px] text-[36px] leading-[40px]">ddddd</div>
        <div className="flex items-center gap-2 py-[10px] text-sm text-gray-400">
          <div className="h-9 w-9 rounded-full bg-gray-200 p-2"></div>
          <div className="text-gray-400">email@email.com</div>
          <div className="text-gray-400">{new Date().toLocaleDateString()}</div>
        </div>
        <div className="flex flex-row gap-2 border-y border-gray-200 py-[10px] text-sm">
          <div className="rounded-[10px] border border-gray-400 px-1 text-[12px] text-gray-400">
            FrontEnd
          </div>
        </div>
        <div className="py-5 text-[16px] text-gray-400">내용</div>
      </div>
      <div className="relative w-full">
        <form action="" className="mt-0">
          <div className="mt-[10px] h-full w-full">
            <label htmlFor="" className="text-bold mt-[20px]">
              댓글 입력
            </label>
            <textarea
              name=""
              id=""
              className="mt-[10px] min-h-[100px] w-full max-w-[680px] rounded-[.3rem] border border-gray-400 p-[10px] text-[16px]"
            />
          </div>
          <div className="mt-[10px] flex h-full w-full flex-row-reverse">
            <input
              type="submit"
              value="입력"
              className="h-[36px] w-[100px] cursor-pointer rounded-[5px] border-none bg-blue-600 text-[14px] text-white"
            />
          </div>
        </form>
        <div className="mb-[100px] mt-[40px]">
          <div className="border-b border-gray-200 py-[10px]">
            <div className="flex items-center gap-[10px] text-[12px]">
              <div>email@email.com</div>
              <div className="text-gray-400">
                {new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="pt-1 text-[14px]">내용</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

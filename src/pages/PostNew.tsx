const PostNew = () => {
  return (
    <form className="mx-auto mb-0 mt-10 max-w-[680px] p-5">
      <div className="mt-5 w-full">
        <label htmlFor="" className="mb-[10px] mt-5 block">
          제목
        </label>
        <input
          type="text"
          required
          className="w-full max-w-[680px] rounded-[.3rem] border p-[10px]"
        />
      </div>
      <div className="mt-5 w-full">
        <label htmlFor="" className="mb-[10px] mt-5 block">
          카테고리
        </label>
        <select
          name=""
          id=""
          className="h-10 max-w-[680px] rounded-[.3rem] border px-5 py-0 text-[16px]"
        >
          <option value="">카테고리를 선택해주세요.</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="web">Web</option>
          <option value="native">Native</option>
        </select>
      </div>
      <div className="mt-5 w-full">
        <label htmlFor="" className="mb-[10px] mt-5 block">
          요약
        </label>
        <input
          type="text"
          required
          className="w-full max-w-[680px] rounded-[.3rem] border p-[10px]"
        />
      </div>
      <div className="mt-5 w-full">
        <label htmlFor="" className="mb-[10px] mt-5 block">
          내용
        </label>
        <textarea
          name=""
          id=""
          className="min-h-[400px] w-full max-w-[680px] rounded-[.3rem] border p-[10px]"
        />
      </div>
      <div className="mt-5 w-full">
        <button
          type="button"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          제출
        </button>
      </div>
    </form>
  );
};

export default PostNew;

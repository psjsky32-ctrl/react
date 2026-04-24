const ArticleWriter = ({
  onSaveButtonClick,
  onSubjectChange,
  onEmailChange,
  onContentChange,
  onNameChange,
  onStateClick,
}) => {
  return (
    <>
      <div>제목</div>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        onChange={onSubjectChange}
      />
      <div>이름</div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={onNameChange}
      />
      <div>이메일</div>
      <input
        type="text"
        placeholder="이메일을 입력하세요"
        onChange={onEmailChange}
      />
      <div>내용</div>
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={onContentChange}
      />
      <div>
        <button type="button" onClick={onSaveButtonClick}>
          저장
        </button>
        <button type="button" onClick={onStateClick}>
          취소
        </button>
      </div>
    </>
  );
};
export default ArticleWriter;

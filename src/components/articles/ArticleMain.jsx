//articles.json 파일 불러오기
import { useState } from "react";
import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter";
const ArticleMain = () => {
  const [articleDatas, setNewarticleData] = useState(articleData);
  const [{ subject, name, email, content }, setNewList] = useState({
    subject: "",
    name: "",
    email: "",
    content: "",
  });
  const [state, setState] = useState(false);
  const onSubjectChangeHandler = (event) => {
    setNewList((prevData) => ({ ...prevData, subject: event.target.value }));
  };
  const onEmailChangeHandler = (event) => {
    setNewList((prevData) => ({ ...prevData, name: event.target.value }));
  };
  const onContentChangeHandler = (event) => {
    setNewList((prevData) => ({ ...prevData, email: event.target.value }));
  };
  const onNameChangeHandler = (event) => {
    setNewList((prevData) => ({ ...prevData, content: event.target.value }));
  };
  const onSaveButtonClickHandler = () => {
    setNewarticleData((prevData) => ({
      articles: [
        ...prevData.articles,
        { id: prevData.articles.length + 1, subject, name, email, content },
      ],
    }));
    setNewList({ subject: "", name: "", email: "", content: "" });
  };
  const onStateClickButtonHandler = () => {
    setState((prevState) => !prevState);
  };
  //과제 힌트 논리연산자 const a = {true && "abc"}
  return (
    <div className="wrapper">
      <header>게시글</header>
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articleData={articleDatas} />
        </tbody>
      </table>
      <div>
        {!state ? (
          <button onClick={onStateClickButtonHandler}>글쓰기</button>
        ) : (
          <ArticleWriter
            inputData={{ subject, name, email, content }}
            onStateClick={onStateClickButtonHandler}
            onSubjectChange={onSubjectChangeHandler}
            onEmailChange={onEmailChangeHandler}
            onContentChange={onContentChangeHandler}
            onNameChange={onNameChangeHandler}
            onSaveButtonClick={onSaveButtonClickHandler}
          />
        )}
      </div>
    </div>
  );
};
export default ArticleMain;

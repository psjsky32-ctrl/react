import { useState } from "react";
import { createContext } from "react";

const ArticleContext = createContext();
export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState({
    count: 0,
    result: [],
    pagination: {},
  });

  const value = {
    articles: articles.result,
    count: articles.count,
    pagination: articles.pagination,
    setArticles,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};
export default ArticleContext;

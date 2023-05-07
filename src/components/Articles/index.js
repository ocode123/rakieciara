import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful.js";
import ArticleCard from "./articleCard";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { getArticles } = useContentful();

  useEffect(() => {
    getArticles().then((response) => response && setArticles(response));
  });

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Artykuły</h1>
        <p></p>
      </TitleWrapper>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </Wrapper>
  );
};

export default Articles
const Wrapper = styled.div`
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`

  display: grid;
  row-gap: 10px;
`;

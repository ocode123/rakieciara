import './index.scss';
import 'react-tabs/style/react-tabs.css';
import ArticleCard from '../ArticleCard';
import styled from "styled-components";
import useContentful from "./useContentful.js";
import { useEffect, useState } from "react";

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

     <ArticleCard/>

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
  font-size:25px;
  padding-top: 10vh;
  font-family: 'Space Mono', monospace;
  @media screen and (max-width:500px) {
    margin-top: 20vh;
  }
`;
import styled from "styled-components";

const ArticleCard = ({ article }) => {
  return (
    <Wrapper>
      <TextContainer>
        <Image src={article.avatar.file.url}/>
        <Title>{article.title}</Title>
        <Subtitle>{article.description}</Subtitle>
      </TextContainer>
    </Wrapper>
  );
};


export default ArticleCard;
const Wrapper = styled.div`
margin-top:10vh;
  display: flex;
  align-items: flex-end;
  width: 70vw;
  height: auto;

  @media screen and (max-width:500px) {
    margin-top: 5vh;
  }
`;
const Image = styled.img`
width: 45vh;
float: left;    
 margin: 0 15px 0 0;
 position: relative; 
 @media screen and (max-width:500px) {
  width: 60vw;
}
`

const TextContainer = styled.div`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  gap: 10px;
  width: 100%;
  @media screen and (max-width:500px) {
    margin-top: -5vh;
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 0px;
  @media screen and (max-width:500px) {
    padding-top: 10vh;
  }
`;

const Subtitle = styled.p`
padding-top: 5vh;
  font-weight: normal;
  font-size: 17px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px;
 
`;
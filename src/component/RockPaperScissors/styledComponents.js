import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   background-color: #223a5f;
  align-items: center;
`
export const SuperAppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 20px;
  @media screen and (max-width: 576px) {
    height: 100vh;
    background-size: cover;
  }
`

export const ScoreContainer = styled.div`
  height: 180px;
  border: 2px solid #ffffff;
  width: 60%;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  //   @media screen and (max-width: 576px) {
  //     width: 90%;
  //   }
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ScoreViewContainer = styled.div`
  height: 110px;
  width: 150px;
  border: 9px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const Paragraph = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 25px;
  //   font-weight: 600;
`
export const ScoreHeading = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`
export const IconButton = styled.div`
  background-image: url('${props => props.imageUrl}');
`
export const PopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
// export const
export const PopUpImg = styled.img`
  height: 600px;
  width: 600px;
`
export const CloseContainer = styled.div`
  //   height: 500px;
  //   width: 1000px;
`
export const DivContainer = styled.div`
  //   text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const ImgContainer = styled(DivContainer)`
  //   padding-left: 30px;
  //   padding-right: 30px;
  text-align: center;
  padding-top: 15px;
  padding-right: 25px;
`

export const ModalContainer = styled.div``

export const PlayButtons = styled.ul`
  width: 450px;
  text-align: center;
  margin: 0;
  border: none;
  //   background-color: transparent;
  height: 450px;
  margin-top: 3%;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //   @media screen and (min-width: 576px) {
  //     width: 300px;
  //   }
`

export const ResultContainer = styled.div`
  min-height: 470px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #223a5f;
  height: 30px;
  width: 100px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 576px) {
    margin-top: 35%;
  }
  //   margin: 0;
`
export const GeneratedContainer = styled.div`
  height: 445px;
`
export const SelectionImg = styled.img`
  height: 200px;
  margin-left: 19%;
`
export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  //   height: 470px;
  width: 860px;
  //   border: 1px solid #ffffff;
  margin-top: 7%;
  @media screen and (max-width: 576px) {
    width: 400px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainBtn = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  height: 50px;
  width: 200px;
  font-family: 'Bree Serif';
  font-weight: 600;
  margin-left: 20px;
  border-radius: 10px;
  border: none;

  @media screen and (max-width: 576px) {
    margin-bottom: 35%;
  }
`
export const TextContent = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
  margin-left: 20px;
  font-weight: bold;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const PlayAgainDiv = styled.div`
  margin-left: 6%;
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  margin-left: 45px;
  font-size: 45px;
  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`

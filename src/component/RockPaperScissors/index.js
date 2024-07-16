import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import GameComponent from '../GameComponent'

import {
  AppContainer,
  ScoreContainer,
  Paragraph,
  ScoreViewContainer,
  ScoreCardContainer,
  ScoreHeading,
  PopContainer,
  //   IconButton,
  PopUpImg,
  //   CloseContainer,
  DivContainer,
  ImgContainer,
  ModalContainer,
  SuperAppContainer,
  PlayButtons,
  RulesButton,
  //   ResultContainer,
  SelectionImg,
  Container,
  SelectionContainer,
  PlayAgainBtn,
  TextContent,
  PlayAgainDiv,
  ResultText,
} from './styledComponents'

// import {ImgTag} from '../GameComponent/styledComponents'

class RockPaperScissors extends Component {
  state = {score: 0, isGenerated: false, imageIds: [], result: ''}

  generateGame = id => {
    const {choicesList} = this.props
    const {score} = this.state
    const generatedNumber = Math.floor(Math.random() * 3)
    // console.log(id)
    console.log('generated', choicesList[generatedNumber].imageUrl)

    // const {imageId, score} = this.state
    // const {choicesList} = this.props
    const generatedImg = choicesList[generatedNumber].imageUrl
    const filterImg = choicesList.filter(eachImg => eachImg.id === id)
    const yourImg = filterImg[0].imageUrl
    const yourId = filterImg[0].id
    const opponentId = choicesList[generatedNumber].id
    // const opponentId = generatedImg

    const result = this.getResult(yourId, opponentId)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState(prevState => ({
      isGenerated: !prevState.isGenerated,
      imageIds: [generatedImg, yourImg],
      result,
      score: newScore,
    }))
    // console.log('you selected', yourId, 'generated', opponentId)
  }

  getResult = (yourId, opponentId) => {
    if (yourId === 'PAPER') {
      switch (opponentId) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (yourId === 'SCISSORS') {
      switch (opponentId) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentId) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  playAgain = () => {
    this.setState(prevState => ({isGenerated: !prevState.isGenerated}))
  }

  resultView = () => {
    const {imageIds, result} = this.state
    // console.log(imageIds)
    const yourImg = imageIds[1]
    const generatedImg = imageIds[0]
    // console.log(yourImg, generatedImg)

    return (
      <>
        <SelectionContainer>
          <Container>
            <TextContent>YOU</TextContent>

            <SelectionImg src={yourImg} alt="your choice" />
          </Container>
          <Container>
            <TextContent>OPPONENT</TextContent>

            <SelectionImg src={generatedImg} alt="opponent choice" />
          </Container>
        </SelectionContainer>
        <PlayAgainDiv>
          <ResultText>{result}</ResultText>
          <PlayAgainBtn type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </PlayAgainBtn>
        </PlayAgainDiv>
      </>
    )
  }

  render() {
    const {choicesList} = this.props
    const {isGenerated, score} = this.state
    return (
      <SuperAppContainer>
        <AppContainer>
          <ScoreContainer>
            <ScoreCardContainer>
              <div>
                <Paragraph>
                  ROCK <br /> PAPER <br />
                  SCISSORS
                </Paragraph>
              </div>
              <ScoreViewContainer>
                <ScoreHeading>Score</ScoreHeading>
                <ScoreHeading>{score}</ScoreHeading>
              </ScoreViewContainer>
            </ScoreCardContainer>
          </ScoreContainer>
          {isGenerated === true ? (
            this.resultView()
          ) : (
            <PlayButtons>
              {choicesList.map(item => (
                <GameComponent
                  details={item}
                  key={item.id}
                  generateGame={this.generateGame}
                />
              ))}
            </PlayButtons>
          )}
        </AppContainer>

        <PopContainer>
          <Popup
            trigger={<RulesButton type="button">RULES</RulesButton>}
            contentStyle={{width: '645px'}}
            modal
            nested
          >
            {close => (
              <ModalContainer>
                <DivContainer>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Mute volume"
                  >
                    <RiCloseLine />
                  </button>
                </DivContainer>

                <ImgContainer>
                  <PopUpImg
                    src=" https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ImgContainer>
              </ModalContainer>
            )}
          </Popup>
        </PopContainer>
      </SuperAppContainer>
    )
  }
}

export default RockPaperScissors

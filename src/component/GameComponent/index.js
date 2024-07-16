import {ImgTag, GameOptionButton, OptionsList} from './styledComponents'

const GameComponent = props => {
  const {details, generateGame} = props
  const {id, imageUrl} = details

  const onGenerateGame = () => {
    generateGame(id)
  }
  const imgId = id.toLowerCase().concat('Button')
  //   console.log(imgId)
  return (
    <OptionsList>
      <GameOptionButton type="button" onClick={onGenerateGame}>
        <ImgTag src={imageUrl} alt={id} data-testid={imgId} />
      </GameOptionButton>
    </OptionsList>
  )
}

export default GameComponent

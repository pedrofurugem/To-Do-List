import Image from './img/image.png'

import { 
  MainContainer, 
  Container, 
  LeftContainer,
  HeadLine,  
  Titulo,
  SubHeadLine,
  LogoImage,
  RightContainer,
  Subtitulo,
  Tarefa,
  Input
  } 
  from './styles.js'

function App() {
  return (
    <MainContainer>
      <Container>
        <LeftContainer>
          <HeadLine>
            <LogoImage src={Image} alt="task"/>
            <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
          </HeadLine>
          <SubHeadLine>Adicione ao lado as tarefas que deseja fazer hoje e não pare até ela estar vazia!</SubHeadLine>
        </LeftContainer>
        <RightContainer>
          <Titulo>Minhas Tarefas</Titulo>
          <Subtitulo>Tarefas do dia...</Subtitulo>
          <Tarefa>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49999 9.31826L12.9548 14.7731L14.7731 12.9548L9.31826 7.49998L14.7731 2.04516L12.9548 0.226886L7.49999 5.68171L2.04516 0.226887L0.226888 2.04516L5.68171 7.49999L0.226888 12.9548L2.04516 14.7731L7.49999 9.31826ZM7.49999 9.31826L9.31826 7.49998L7.49999 5.68171L5.68171 7.49999L7.49999 9.31826Z" fill="#35383E" fill-opacity="0.25"/>
              <path d="M7.49999 9.31826L9.31826 7.49998L7.49999 5.68171L5.68171 7.49999L7.49999 9.31826Z" fill="#35383E" fill-opacity="0 25"/>
            </svg>
            <p>Tarefa 1</p>
          </Tarefa>
          <Input type="text" placeholder="Digite sua próxima tarefa aqui..."/>
        </RightContainer>
      </Container>
    </MainContainer>
  );
}

export default App;

import styled from 'styled-components'

export const MainContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
`

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center
`

/*lado esquerdo */
export const LeftContainer = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 684px;
`

export const LogoImage = styled.img`
   margin-right: 8px
`

export const Titulo = styled.h1`
   color: black;
   font-size: 40px;
   font-weight: 800;
   word-wrap: break-word
`

export const SubHeadLine = styled.p`
   font-size: 24px;
   font-weight: 400;
   word-wrap: break-word;
   margin-top: 16px;
`

export const HeadLine = styled.div`
   display: flex;

   span {
      color: #1F5FA3;
   }
`

/*lado direito */
export const RightContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 500px;
   height: fit-content; //adaptar a altura
   padding: 45px;
   align-items: flex-start;
   gap: 10px;
   margin-left: 52px;
   border-radius: 45px;
   background: #FFF;
   box-shadow: 0px 40px 100px 0px rgba(0, 0, 0, 0.08), 0px 10px 80px 0px rgba(0, 0, 0, 0.06), 0px 2px 15px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`
/*9:20 */
export const Subtitulo = styled.p`
   color: rgba(52.64, 55.67, 61.62, 0.50);
   font-size: 20px;
   font-weight: 700;
`

export const Tarefa = styled.div`
   display: flex;
   width: 410px;
   padding: 15px;
   align-items: center;
   gap: 15px;

   border-radius: 11.25px;
   background: rgba(53, 56, 62, 0.10);

   border-radius: 22.5px;
   background: rgba(53, 56, 62, 0.05);

   svg {
      background: rgba(53, 56, 62, 0.25);
      padding: 8px;
      width: 35px;
      border-radius: 12.5px;
      height: 35px;
      cursor: pointer;
   }

   p {
      color: #35383E;
      font-size: 20px;
      font-weight: 700;
   }
`

export const Input = styled.input`
   width: 410px;
   display: flex;
   padding: 15px 15px 10px 15px;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 5px;
   align-self: stretch;
   border: none;
   border-bottom: 2px solid rgba(53, 56, 62, 0.05);
   outline: none;
   color: rgba(53, 56, 62, 0.50);
   font-size: 22px;
   font-weight: 800;
`
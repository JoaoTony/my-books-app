import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  position: relative;
`

export const Background00 = styled.div`
  position: absolute;
  z-index: 1;
  background: ${props => props.theme.colors.gray04};
  width: 180px;
  height: 185px;
  top: 10px;
  right: 0;
  left: 0;
`

export const Background01 = styled.div`
  position: absolute;
  z-index: 2;
  background: ${props => props.theme.colors.gray02};
  width: 170px;
  height: 195px;
  top: 5px;
  right: 10px;
  left: 0;
`

export const Image = styled.img`
  width: 160px;
  height: 205px;
  position: relative;
  z-index: 3;
  align-self: flex-start;
`

export const Name = styled.p`
  color: ${props => props.theme.colors.title};
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  margin-top: 5px;
  width: 180px;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
`

export const Pages = styled.p`
  color: ${props => props.theme.colors.gray01};
  font-size: 15px;
  margin: 0;
`

export const Row = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 10px
` 

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  
  svg { 
    width: 30px;
    height: 30px
  }
`

export const DeletButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg { 
    width: 30px;
    height: 30px
  }
`
import React from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import rectangle from './assets/images/rectangle-1.png'
import {Img} from './components/Img.styled';
import {WrapperContent} from './components/WrapperContent/WrapperContent.styled';
import {Title} from './components/WrapperContent/Title.styled';
import {Text} from './components/WrapperContent/Text.styled';
import {WrapperBtn} from './components/WrapperContent/WrapperBtn/WrapperBtn.styled';
import {Button} from './components/WrapperContent/WrapperBtn/Button.styled';
import {Form, Input} from './components/WrapperContent/WrapperBtn/Form.styled';

function App() {
    return (
        <div className="App">
            <Container>
                <Box>
                    <Img src={rectangle} alt={'Rectangle'}/>
                    <WrapperContent>
                        <Title>Headline</Title>
                        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                        <WrapperBtn>
                            <Button>See more</Button>
                            <Form>
                                <Input type={'submit'} value={'Save'}/>
                            </Form>
                        </WrapperBtn>
                    </WrapperContent>
                </Box>
            </Container>
        </div>
    );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: ${myTheme.colors.primary};
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`












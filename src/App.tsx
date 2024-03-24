import React from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import rectangle from './assets/images/rectangle-1.png'
import {Simulate} from 'react-dom/test-utils';
import submit = Simulate.submit;

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
  height: 100vh;
  justify-content: center;
  align-items: center;
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
`
const Img = styled.img`
  margin-bottom: 20px;
`

const WrapperContent = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${myTheme.colors.secondary};
  margin-bottom: 20px;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: ${myTheme.colors.text};
  margin-bottom: 19px;
`

const WrapperBtn = styled.div`
  display: flex;
  gap: 12px;
`

const Button = styled.button`
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  color: ${myTheme.colors.primary};
  background-color: ${myTheme.colors.button};
  border: 2px solid ${myTheme.colors.button};
  border-radius: 5px;
  padding: 5px 20px;
`

const Form = styled.form`

`

const Input = styled.input`

`
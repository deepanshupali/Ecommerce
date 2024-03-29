import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const linkStyle = {
  margin: "5px 0px",
  fontSize: "12px",
  textDecoration: "underline",
  cursor: "pointer",
  color: "black",
};

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
          <Button>LOGIN</Button>

          <Link style={linkStyle}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to={"/register"} style={linkStyle}>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  ${mobile({ padding: "10px 0" })}
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: "2", justifyContent: "flex-start" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "9px" })}
`;
const linkStyle = {
  textDecoration: "none",
  color: "black ",
};

const Navbar = () => {
  const { user, logOut } = UserAuth();

  async function handleLogout() {
    try {
      await logOut();
      console.log("here");
    } catch (err) {
      console.log(err);
    }
  }
  const items = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"} style={linkStyle}>
            <Logo>Dee.</Logo>
          </Link>
        </Center>
        <Right>
          {user?.email ? (
            <MenuItem>
              <Link style={linkStyle} onClick={() => handleLogout()}>
                LOG OUT{" "}
              </Link>
            </MenuItem>
          ) : (
            <MenuItem>
              <Link to={"/login"} style={linkStyle}>
                SIGN IN{" "}
              </Link>
            </MenuItem>
          )}

          <MenuItem>
            <Link to={"/cart"} style={linkStyle}>
              <Badge badgeContent={items.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

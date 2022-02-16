import styled from "styled-components"

export const Nav = styled.div`
    padding: 40px;
    background-color: lightgrey;
    display: flex;
    justify-content: space-between;
`;

export const ImgDiv = styled.div`
    width: 10%;
    height: 50%;
    
    img{
        visibility:  ${(props) => (props.width < 700 ? "hidden" : "visible")};
        width: 100%;
        height: 100%;
    }
`;
export const RightPartInNav = styled.div`
    margin-top: 25px;
    font-family: sans-serif;
    a{

        padding: ${(props)=> (props.width < 700 ? "12px" : "10px")};
        font-size: ${(props)=> (props.width < 700 ? "23px" : "24px")};
        color: black;
        margin-right: 20px;
        background-color: white;
        text-decoration: none;
        
    }
`;
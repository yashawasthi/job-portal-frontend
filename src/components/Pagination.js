import React from 'react';
import styled from "styled-components"


const Container=styled.div`
display:flex;
margin:10px 0 10px 0;
justify-content:center;
` 

const Wrapper=styled.ul`
list-style:none;
display:flex;
`
const Item=styled.li`
padding:5px;
font-size:35px;
margin:0 10px;
cursor:pointer;
background-color:white;
border:1px solid black;
border-radius: 10px;
&:active{
  background-color: black;
}
`
const Link=styled.a`
text-decoration:none;
color:black;

`
const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Wrapper className='pagination'>
        {pageNumbers.map(number => (
          <Item key={number} className='page-item'>
            <Link onClick={(e) => {
              e.preventDefault()
              paginate(number)}}  href='!#' className='page-link'>
              {number}
            </Link>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Pagination;

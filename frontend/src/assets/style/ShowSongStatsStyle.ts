import styled from '@emotion/styled';
import { Box, Flex } from "rebass";

export const StyledGrid = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
  padding: 0 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
`;

// Small circular card component for each section
export const StyledCard = styled(Box)`
  background: #fff;
  border-radius: 50%;
  width: 80px; /* Adjust as needed */
  height: 80px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// Number styling inside the card
export const StyledCardNumber = styled.span`
  font-size: 1.5rem; /* Adjust as needed */
  font-weight: bold;
  color: #333;
`;

// Header of the card (if needed)
export const StyledCardHeader = styled(Box)`
  background: #f5f5f5;
  padding: 8px;
  font-weight: bold;
  color: #333;
  border-radius: 50%;
  text-align: center;
  font-size: 0.75rem;
`;

// Container for cards
export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// List styling for stats
export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Span styling for stats values
export const StyledSpan = styled.span`
  background: #6c63ff;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 5px;
  display: inline-block;
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 1rem;
  }
`;

// Select styling for dropdown
export const StyledSelect = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #5a54e6;
  }
`;

// Option styling for dropdown
export const StyledOption = styled.option`
  color: #070f2b;
  background: #fff;
  display: flex;
  white-space: pre;
  padding: 0.5rem;
`;

// Container for lists
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 1rem 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Heading styling for sections
export const StyledH2 = styled.h2`
  color: #6c63ff;
  font-size: 1.75rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Styled list for expandable sections
export const StyledSongsList = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  & > li {
    display: ${props => (props.open ? 'block' : 'none')};
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
  }
  & > h3 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #6c63ff;
    }
  }
  @media (max-width: 768px) {
    & > li {
      margin: 0.25rem 0;
    }
  }
`;
// Dropdown container
export const DropdownContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Dropdown title
export const DropdownTitle = styled.h2`
  color: #6c63ff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

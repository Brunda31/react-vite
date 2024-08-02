import { useState } from "react";
import { Fragment } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { SlCalender } from "react-icons/sl";

const ListItem = styled.ul`
  padding: 50;
  list-style: none;
`;

interface LiProps {
  active: boolean;
}

const Li = styled.li<LiProps>`
  background-color: ${(props) => (props.active ? "yellow" : "none")};
  list-style: none;
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ListItem>
        {items.map((item, index) => (
          <Li
            active={index === selectedIndex}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </Li>
        ))}
      </ListItem>
      <hr></hr>
      <h4>This is a calender Icon using react-icons</h4>
      <SlCalender color="blue" size="50"></SlCalender>
      <hr></hr>
    </Fragment>
  );
}

export default ListGroup;

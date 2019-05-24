import React from 'react';
import MenuButton from '../../components/MenuButton';
import {Options, Option, DropdownContainer} from '../../components/styled-components';

const Dropdown = (props) => (
  <DropdownContainer>
    <MenuButton />
    <Options>
      {props.options? (props.options.map(option => (
        <Option>{option}</Option>
      ))):
      (props.children)}
    </Options>
  </DropdownContainer>
);

Dropdown.Item = props => (
    <Option>
      {props.children}
    </Option>
)

export default Dropdown;

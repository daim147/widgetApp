import React from "react";
import { Dropdown } from "semantic-ui-react";
const DropDown = (props) => {
  return (
    <div className="ui segment">
      <Dropdown
        placeholder={props.placeHolder}
        fluid
        search
        selection
        value={props.inpuValue}
        options={props.data}
        onChange={(_, { value }) => props.setValue(value)}
      />
    </div>
  );
};

export default DropDown;

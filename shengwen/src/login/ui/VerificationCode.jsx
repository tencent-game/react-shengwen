import React from 'react';
import {Flex, InputItem} from "antd-mobile"

function VerificationCode(props) {
  return (
    <div>
      <Flex className="login-code">
        <Flex.Item>
          <InputItem
            style={{border: "1px solid #000"}}
            type="number"
            className="input1"
            maxLength={1}
            onChange={value => {
              console.log("onChange", value)
            }}
          />
        </Flex.Item>
        <Flex.Item>
          <InputItem
            type="number"
            className="input2"
            maxLength={1}
            onChange={value => {

            }}
          />
        </Flex.Item>
        <Flex.Item>
          <InputItem
            type="number"
            className="input3"
            maxLength={1}
            onChange={value => {

            }}
          />
        </Flex.Item>
        <Flex.Item>
          <InputItem
            type="number"
            className="input4"
            maxLength={1}
            onChange={value => {

            }}
          />
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default VerificationCode;
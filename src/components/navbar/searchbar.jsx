import React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';


const { Search } = Input;


const onSearch = value => console.log(value);
const SearchBar = () =>{
return(
  <Space direction="vertical">
    <Search 
      placeholder="Where are you going"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  </Space>
)
}

export default SearchBar;
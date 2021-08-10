import React, { FC } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { StyledSearchListCard } from './SearchList.styles';

export interface User {
  key?: string;
  title?: string;
  dataIndex?: string;
  width?: string;
  name?: string;
}

const columns: ColumnsType<User> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '50%'
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    key: 'nationality',
    width: '35%'
  },
  {
    dataIndex: 'isActive',
    key: 'isActive'
  }
];

interface SearchListProps {
  data?: Array<User>;
  selectedPlayerAction: Function;
}

const SearchList: FC<SearchListProps> = ({ data, selectedPlayerAction }) => {
  return (
    <StyledSearchListCard>
      <Table
        size="large"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 6 }}
        onRow={(record) => {
          return {
            onClick: () => selectedPlayerAction(record)
          };
        }}
        rowKey="name"
      />
    </StyledSearchListCard>
  );
};

export default SearchList;

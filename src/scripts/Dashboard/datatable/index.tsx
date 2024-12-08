import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: (row: { title: string }) => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: { year: number }) => row.year,
    sortable: true,
  },
];

const data = [
  { id: 1, title: 'Conan the Barbarian', year: '1982' },
  { id: 2, title: 'The Terminator', year: '1984' },
  { id: 3, title: 'Commando', year: '1985' },
];

const DataTableComponent: React.FC = () => {
  return (
      <DataTable
          title="Movie List"
          columns={columns}
          data={data}
          pagination
      />
  );
};

export default DataTableComponent;

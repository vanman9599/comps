import React from 'react';
import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
        {name: 'Cherry', color: 'bg-red-700', score: 2},
    ]

    const config = [
    {label: "Name", render: (fruit) => fruit.name, sortValue: (fruit) => fruit.name},
    {label: "Color", render: (fruit)=> <div className={`p-2 m2 ${fruit.color}`}></div>},
    {label: "Score", render: (fruit) => fruit.score, header: () => <th className="bg-red-500">Score</th>, sortValue: (fruit) => fruit.score},    
    {label: "Score Squared", render: (fruit) => fruit.score * fruit.score ** 2, header: () => <th className="bg-red-500">Score Squared</th>, sortValue: (fruit) => fruit.score},    
  
];
    const keyFn = (fruit)=>{
        return fruit.name
    }
  return (
    <div>
        <Table data={data} config={config} keyFn={keyFn} />
        <SortableTable data={data} keyFn={keyFn} config={config} /></div>
  )
}

export default TablePage
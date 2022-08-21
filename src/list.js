import React from 'react';
import DataTable from 'react-data-table-component';

const List = ({peopleData}) => {

    console.log(peopleData)

    const columns = [
        {
          name: 'Name',
          selector: (row) => row.username
        },
        {
          name: 'DOB/Age',
          selector: (row) => row.dob
        },
        {
          name: 'sex',
          selector: (row) => row.sex
        },
        {
          name: 'mobile',
          selector: (row) => row.mobile
        },
        {
          name: 'email',
          selector: (row) => row.email
        }
      ]

  return (
    <>
        
        {/* {peopleData.map((person)=>{
            const {username, sex} = person;
            return <>
                <h5>sex</h5>
                <h5>username</h5>
            </>
        })} */}

        <DataTable columns={columns} data={peopleData}/>
    </>
  )
}

export default List
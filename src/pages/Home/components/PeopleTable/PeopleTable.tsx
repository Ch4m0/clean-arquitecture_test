import { Person } from '@/models'
import { addFavorite } from '@/redux/state'
import { AppStore } from '@/redux/store'
import { Checkbox } from '@mui/material'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export type PeopleTableProps = {
  // types...
}

const PeopleTable: React.FC<PeopleTableProps> = () => {
  const statePeople = useSelector((store: AppStore) => store.people)
  const favoritePeople = useSelector((store: AppStore) => store.favorites)
  const dispatch = useDispatch()

  const pageSize = 5

  const findPerson = (person: Person): boolean =>
    !!favoritePeople.find((p) => p.id === person.id)

  const filterPerson = (person: Person) =>
    favoritePeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...favoritePeople, person]

    dispatch(addFavorite(filteredPeople))
  }
  const columns = [
    {
      field: 'actions',
      headerName: '',
      flex: 1,
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },

    {
      field: 'levelOfHappiness',
      headerName: 'level of happyness',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ]

  return (
    <div>
      <DataGrid
        rows={statePeople}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize },
          },
        }}
        pageSizeOptions={[5, 10]}
        getRowId={(row) => row.id}
      />
    </div>
  )
}

export default PeopleTable

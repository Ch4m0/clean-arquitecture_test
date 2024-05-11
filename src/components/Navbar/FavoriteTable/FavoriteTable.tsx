import React, { useState } from 'react'
import { Person } from '@/models'
import { AppStore } from '@/redux/store'
import { Checkbox } from '@mui/material'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite } from '@/redux/state'

export type FavoriteTableProps = {
  // types...
}

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const stateFavorites = useSelector((store: AppStore) => store.favorites)
  const dispatch = useDispatch()

  const pageSize = 5

  const findPerson = (person: Person): boolean =>
    !!selectedPeople.find((p) => p.id === person.id)

  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person]

    dispatch(addFavorite(filteredPeople))

    setSelectedPeople(filteredPeople)
  }
  const columns = [
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
  ]

  return (
    <div>
      <DataGrid
        rows={stateFavorites}
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

export default FavoriteTable

import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { CustomDialog } from '../CustomDialog'
import { FavoriteTable } from './FavoriteTable'
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog'

export type NavbarProps = {
  // types...
}

const Navbar: React.FC<NavbarProps> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            4bn3r DEV
          </Typography>
        </Toolbar>

        <Button variant="contained" onClick={handleClick}>
          Open Favorites
        </Button>
      </AppBar>
    </>
  )
}

export default Navbar

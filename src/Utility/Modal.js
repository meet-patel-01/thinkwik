<<<<<<< HEAD
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import React from 'react'

function Modal({open, close, children, title}) {
  return (
    <Dialog open={open} onClose={close}>
        <DialogTitle>
            {title}
            {close ? (
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <GridCloseIcon />
        </IconButton>
      ) : null}
      <br />
        </DialogTitle>
        <DialogContent>           
         {children}
        </DialogContent>       
      </Dialog>
  )
}

=======
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import React from 'react'

function Modal({open, close, children, title}) {
  return (
    <Dialog open={open} onClose={close}>
        <DialogTitle>
            {title}
            {close ? (
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <GridCloseIcon />
        </IconButton>
      ) : null}
      <br />
        </DialogTitle>
        <DialogContent>           
         {children}
        </DialogContent>       
      </Dialog>
  )
}

>>>>>>> 6c790c2027dc0c1a7e2fe586677b9e0abd031eed
export default Modal
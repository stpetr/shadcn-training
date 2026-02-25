import { TextField, Select as MuiSelect, MenuItem } from '@mui/material'

import { Input } from '@/components/ui/input'

export const Inputs = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-center">UI Kit</h2>
        <Input label="Outlined small" variant="outlined" color="warning" size="small" placeholder="Long placeholder" />
        <Input label="Outlined" variant="outlined" color="warning" size="medium" />

        <Input label="Filled small" variant="filled" size="small" />
        <Input label="Filled" variant="filled" size="medium" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-center">MUI</h2>
        <TextField label="Outlined small" variant="outlined" color="warning" size="small" placeholder="Long placeholder" />
        <TextField label="Outlined" variant="outlined" color="warning" size="medium" />

        <TextField label="Filled small" variant="filled" size="small" />
        <TextField label="Filled" variant="filled" size="medium" />

        <MuiSelect size="medium" variant="filled" color="warning">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </MuiSelect>
      </div>
    </>
  )
}
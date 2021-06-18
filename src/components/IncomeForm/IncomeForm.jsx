import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles({
    formControl: {
        minWidth: 100
    }
})

const IncomeForm = () => {

    const history = useHistory()
    const classes = useStyles()

    const [newIncome, setNewIncome] = useState({
        amount: '',
        description: '',
        recurring: '',
    })

    const handleFormChange = (e) => {
        const value = e.target.value
        setNewIncome({ ...newIncome, [e.target.name]: value})
        console.log(newIncome)
    }

    const submitIncomeForm = (e) => {
        e.preventDefault()
        console.log(newIncome)
        setNewIncome({
            amount: '',
            description: '',
            recurring: '',
        })
    }

    return(
        <div>
            <h1>Add New Income</h1>
            <form onSubmit={submitIncomeForm}>
            
                <TextField 
                    label="Amount" 
                    name="amount"
                    value={newIncome.amount} 
                    onChange={handleFormChange}
                />
                <TextField
                    label="Description" 
                    name="description" 
                    value={newIncome.description}
                    onChange={handleFormChange}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="recurring-select=label">Recurring?</InputLabel>
                        <Select 
                            labelId="recurring-select=label"
                            id="recurring-select"
                            name="recurring"
                            value={newIncome.recurring}
                            onChange={handleFormChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Add Income</Button>
            </form>
        </div>

    )
}

export default IncomeForm
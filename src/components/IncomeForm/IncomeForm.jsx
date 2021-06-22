import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
    const dispatch = useDispatch()

    const [newIncome, setNewIncome] = useState({
        amount: '',
        description: '',
        recurring: '',
        frequency: '',
    })

    const handleFormChange = (e) => {
        const value = e.target.value
        setNewIncome({ ...newIncome, [e.target.name]: value})
        console.log(newIncome)
    }

    const submitIncomeForm = (e) => {
        e.preventDefault()
        console.log(newIncome)
        dispatch({ type: 'ADD_INCOME', payload: newIncome})
        setNewIncome({
            amount: '',
            description: '',
            recurring: false,
            frequency: '',
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
                {newIncome.recurring ? (
                    <>
                    <FormControl className={classes.formControl}>
                    <InputLabel id="recurring-select=label">Recurring?</InputLabel>
                        <Select 
                            labelId="recurring-select-label"
                            id="recurring-select"
                            name="recurring"
                            value={newIncome.recurring}
                            onChange={handleFormChange}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="frequency-select-label">How Often?</InputLabel>
                        <Select 
                            labelId="frequency-select=label"
                            id="frequency-select"
                            name="frequency"
                            value={newIncome.frequency}
                            onChange={handleFormChange}
                        >
                            <MenuItem value={'Yearly'}>Yearly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                            <MenuItem value={'Biweekly'}>Biweekly</MenuItem>
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                        </Select>
                </FormControl> 
                </> 
                ) : (
                    <FormControl className={classes.formControl}>
                    <InputLabel id="recurring-select=label">Recurring?</InputLabel>
                        <Select 
                            labelId="recurring-select-label"
                            id="recurring-select"
                            name="recurring"
                            value={newIncome.recurring}
                            onChange={handleFormChange}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                </FormControl>
                )}
                <Button type="submit" variant="contained" color="primary">Add Income</Button>
            </form>
        </div>

    )
}

export default IncomeForm
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'

const IncomeForm = () => {

    const history = useHistory()

    const [newIncome, setNewIncome] = useState({
        amount: '',
        recurring: '',
    })

    const handleFormChange = (e) => {
        const value = e.target.value
        setNewIncome({ ...newIncome, [e.target.name]: value})
        console.log(newIncome)
    }

    return(
        <div>
            <h1>Add Income</h1>
            <form>
                <TextField label="Amount"/>
                <TextField label="Description"/>
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
            </form>
        </div>

    )
}

export default IncomeForm
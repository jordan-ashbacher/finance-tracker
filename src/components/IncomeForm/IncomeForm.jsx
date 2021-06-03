import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const IncomeForm = () => {

    return(
        <div>
            <h1>Add Income</h1>
            <form>
                <TextField id='standard-basic' label='Income Amount'></TextField>
            </form>
        </div>

    )
}

export default IncomeForm
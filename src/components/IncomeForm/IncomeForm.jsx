import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import CustomTextField from '../mui/CustomTextField'

const IncomeForm = () => {

    return(
        <div>
            <h1>Add Income</h1>
            <form>
                <CustomTextField label="Income"/>
            </form>
        </div>

    )
}

export default IncomeForm
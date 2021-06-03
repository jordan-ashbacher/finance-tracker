import { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'


const Home = () => {

    const [openIncomeForm, setOpenIncomeForm] = useState(false)

    const handleOpenIncomeForm = () => {
        console.log('income form open')
        setOpenIncomeForm(true)

    }

    const handleCloseIncomeForm = () => {
        console.log('income form close')
        setOpenIncomeForm(false)
    }

    return(
        <div>
            <h1>HOME COMPONENT</h1>
            <Button onClick={handleOpenIncomeForm}>Add Income</Button>
            
        </div>
    )
}

// const useStyles = makeStyles({

// })

export default Home
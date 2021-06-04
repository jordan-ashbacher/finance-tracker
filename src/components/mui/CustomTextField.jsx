import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

const StyledTextField = styled(TextField)`
    .MuiInput-underline:before {
        border-bottom: 1px solid #fff;
    }
    && .MuiInput-underline:hover:before {
        border-bottom: 1px solid #fff;
    }
    .MuiInput-underline:after {
        border-bottom: 1px solid #fff
    }
    .MuiInputBase-root {
        color: #fff;
    }
    .MuiFormLabel-root {
        color: #fff;
    }
`;

const CustomTextField = ({label}) => {
    return <StyledTextField label={label}/>
}

export default CustomTextField
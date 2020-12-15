import { useSelector } from 'react-redux'
import { TextField } from "@material-ui/core"

const BioConfig = () => {
  const userToken = useSelector(state => state.currentUserToken)
  console.log(userToken)
  return (
    <div>
      <TextField>
        
      </TextField>
      <TextField>
        
      </TextField>
      <TextField>
        
      </TextField>
      <TextField>
      
      </TextField>
      <TextField>
        
      </TextField>
    </div>
  )
}

export default BioConfig
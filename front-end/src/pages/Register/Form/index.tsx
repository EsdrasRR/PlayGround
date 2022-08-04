import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

const Form = () => {
  return (
    <>
      <Grid w="40%" margin="10% 30%">
        <GridItem>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </GridItem>
      </Grid>
    </>
  )
}

export default Form

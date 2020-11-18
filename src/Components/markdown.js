import React from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Markdown = (props) => (
    <Grid style={{width: "100%"}} container>
        <Grid justify="center" container item>
            <Typography>Markdown</Typography>
        </Grid>
        <Grid justify="center" container item>
            <textarea  
                style={{
                    width: "100%", 
                    overflow: "auto"}}
                rows="40"
                id='editor' 
                defaultValue={props.markdown} 
                onChange={props.handleChange} />
        </Grid>
    </Grid>
)

export default Markdown;
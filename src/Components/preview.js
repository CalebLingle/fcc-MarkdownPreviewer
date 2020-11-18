import React from 'react';
import marked from 'marked';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

const Preview = (props) => {
    const mark = marked(props.text,{breaks : true})
    return (
        <Grid style={{maxHeight: "100vh", maxWidth: "100vw"}} container>
            <Grid justify="center" container item>
                <Typography>Preview</Typography>
            </Grid>
            <Grid justify="center" container item>
                <Card>
                    <Typography id='preview' dangerouslySetInnerHTML={{__html : mark}}></Typography>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Preview;
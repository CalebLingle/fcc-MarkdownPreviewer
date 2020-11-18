
import './App.css';
import React, { Component } from 'react';
import placeholder from './Components/placeholder.js';
import Markdown from './Components/markdown.js';
import marked from 'marked';
import Preview from './Components/preview';
import 'typeface-roboto';
import { Grid } from '@material-ui/core'


marked.setOptions({
  breaks: true
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  
  render() {
    const { markdown } = this.state;
    return (
        <div style={{ padding: 40}}>
          <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
            <Grid xs={10} container item>
              <Markdown markdown={this.state.markdown} handleChange={this.handleChange} />
            </Grid>
            <Grid xs={10} justify="center" container item>
              <Preview markdown={this.state.markdown} text={markdown} />
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default App;

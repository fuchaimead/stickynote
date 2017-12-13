import React from 'react';
import { connect } from 'react-redux'
import { Grid, Segment, Header, Button, Icon } from 'semantic-ui-react'
import { deleteNote } from '../actions/notes'


const handleClick = (id, dispatch) => {
  window.confirm('Are you sure?')
  dispatch(deleteNote(id))
}

const Note = ({id, name, dispatch }) => (
  <Grid.Column width={4}>
    <Segment inverted color='blue'> 
      <Header>  </Header> 
        <Segment basic> { name } </Segment> 
        <Icon name='trash outline' positive onClick={() => handleClick(id, dispatch)}> </Icon>
    </Segment> 
 </Grid.Column>
)

export default connect()(Note);


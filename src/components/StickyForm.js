import React from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { incId } from '../actions/nextId';
 
class StickyForm extends React.Component {
  state = { name: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { id, dispatch } = this.props;
    const note = { id, name };
    dispatch(addNote(note))
    dispatch(incId())
    this.setState({ name: ''})
  }
  handleChange = (e) => 
  this.setState({ name: e.target.value })

  render(){
    return(
      <Segment compact>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
        <label>Sticky Note</label>
        </Form.Field>
        <Form.Input
          required 
          value={this.state.name}
          onChange={this.handleChange}>
        </Form.Input>
        <Button type='submit'>Submit</Button>
        </Form>
      </Segment>


    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(StickyForm);
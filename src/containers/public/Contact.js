import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    // padding: theme.spacing.unit,
  },
});

class Contact extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary">Contact</Button>
      </div>
    )
  }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Contact))


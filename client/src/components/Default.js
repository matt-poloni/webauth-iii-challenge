import React from 'react';
import { Redirect } from 'react-router-dom';

import withAuth from '../utils/withAuth';

const Default = (props) => {
  return <Redirect to='/users' />
}

export default withAuth(Default);
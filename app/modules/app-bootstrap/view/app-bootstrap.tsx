/**
 * Loading Screen
 * Get user details from server and decide
 * which section need to show
 * @format
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectActiveSection } from '@app/modules/common';
import { bootstrapApp } from '../slice';

//-----------( Types )-----------
type Props = {
  restored: boolean;
  children: React.ReactElement;
};
//-------------------------------

const AppBootstrap = ({ restored, children }: Props) => {
  const dispatch = useDispatch();
  const activeSection = useSelector(selectActiveSection);

  useEffect(() => {
    restored && dispatch(bootstrapApp());
  }, [dispatch, restored]);

  if (activeSection) {
    return children;
  }

  return null;
};

export default AppBootstrap;

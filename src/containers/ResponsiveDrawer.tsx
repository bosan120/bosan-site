import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const ResponsiveDrawer: React.FC = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense">ボーさんのページ</Toolbar>
      </AppBar>
    </div>
  );
};

export default ResponsiveDrawer;

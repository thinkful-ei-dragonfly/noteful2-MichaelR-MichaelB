import React from 'react';

const FolderContext = React.createContext({
  folders: [],
  // setFolders: () => {},
  notes: [],
  // setNotes: () => {}
})

export default FolderContext;
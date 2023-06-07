import * as React from 'react';

const AppBarContext = React.createContext({
  title: '',
  setTitle: (title) => {},
});

export const AppBarProvider = (props) => {
  const [title, setTitle] = React.useState('');

  const setTitleHandler = (title) => {
    setTitle(title);
  };

  const contextValue = {
    title: title,
    setTitle: setTitleHandler,
  };

  return (
    <AppBarContext.Provider value={contextValue}>
      {props.children}
    </AppBarContext.Provider>
  );
};

export default AppBarContext;

import * as React from 'react';

const AppBarContext = React.createContext({
  showAppBar: () => {}, //true false null
  title: '', // appBar title. need set '' or any value to show app bar
  setTitle: (title) => {},
});

export const AppBarProvider = (props) => {
  const [showAppBar, setShowAppBar] = React.useState(false);
  const [title, setTitle] = React.useState('');

  const showAppBarHandler = (show) => {
    if (show == null) return showAppBar;
    setShowAppBar(show);
  };

  const setTitleHandler = (title) => {
    if (!showAppBar) setShowAppBar(true);
    setTitle(title);
  };

  const contextValue = {
    showAppBar: showAppBarHandler,
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

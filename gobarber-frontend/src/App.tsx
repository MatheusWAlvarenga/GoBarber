// vendors
import React from 'react';

// components
import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

// hooks
import AppProvider from './hooks';

// style
import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;

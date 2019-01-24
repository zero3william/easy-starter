import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import AppState from './store/AppState';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { baseTheme } from './themes/themes';

ReactDOM.render(
  <MuiThemeProvider theme={baseTheme}>
    <CssBaseline /> {/* initialize css */}
    <Provider store={AppState}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

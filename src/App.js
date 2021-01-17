import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { lazy, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./context/index";
const MyApp = lazy(() => import("./layout/theLayout"));

function App() {
  const { myTheme, mainPrimaryColor, mainSecondaryColor } = useContext(
    AppContext
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: myTheme,
          primary: {
            main: mainPrimaryColor,
          },
          secondary: {
            main: mainSecondaryColor,
          },
        },
      }),
    [myTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <React.Suspense fallback={() => <p>loading</p>}>
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <MyApp {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;

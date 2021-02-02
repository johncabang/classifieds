import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  // Checkbox,
  // FormControlLabel,
  Grid,
  // Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core/";

import Hero from "../Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "absolute",
    top: "20%",
    width: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(20px)",
    borderRadius: "40px",
    border: "2px solid rgba(255, 255, 255, 0.4)",
    padding: "30px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "none",
  },
  cssLabel: {
    color: "#000",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#000",
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#000",
  },
}));

function Signin(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    user,
  } = props;

  const classes = useStyles();

  return (
    <>
      <Hero />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {hasAccount ? (
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          )}

          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6">{emailError}</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant="h6">{passwordError}</Typography>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <>
              {hasAccount ? (
                <>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={handleLogin}
                  >
                    Sign In
                  </Button>

                  <Grid container justify="flex-end">
                    <Grid item>
                      {/* <Link href="register" variant="body2"> */}

                      <Typography variant="body1">
                        Don't have an account?{" "}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Register
                        </span>
                      </Typography>
                      {/* </Link> */}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={handleSignup}
                  >
                    Register
                  </Button>

                  <Grid container justify="flex-end">
                    <Grid item>
                      <Typography variant="body1">
                        Have an account?{" "}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Sign in
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}
            </>
            {console.log("From NavBar.js - ", user)}
          </div>
        </Paper>
      </div>
    </>
  );
}

export default Signin;

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core/";

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
  } = props;

  const classes = useStyles();

  return (
    <>
      <Hero />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {hasAccount ? (
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Create your account
            </Typography>
          )}

          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
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
            <Typography variant="body2" color="secondary">
              {emailError}
            </Typography>
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
            <Typography variant="body2" color="secondary">
              {passwordError}
            </Typography>
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
                    Sign in
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
                          Create account
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
                    Create Account
                  </Button>

                  <Grid container justify="flex-end">
                    <Grid item>
                      <Typography variant="body1">
                        Already have an account?{" "}
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
          </div>
        </Paper>
      </div>
    </>
  );
}

export default Signin;

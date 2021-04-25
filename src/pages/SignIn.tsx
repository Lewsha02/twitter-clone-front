import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import { ModalBlock } from "../components/ModalBlock";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71c9f8",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "53%",
    transform: "translate(-50%, -50%)",
    width: "350%",
    height: "350%",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 380,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
}));

function SignIn() {
  const classes = useStylesSignIn();
  const [visibleSignIn, setVisibleSignIn] = React.useState(false);

  const handleClickOpen = () => {
    setVisibleSignIn(true);
  };

  const handleClose = () => {
    setVisibleSignIn(false);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <SearchIcon className={classes.blueSideListInfoIcon} /> Читайте о
              том, что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <PeopleIcon className={classes.blueSideListInfoIcon} /> Узнавайте,
              о чем говорят в мире
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <MessageIcon className={classes.blueSideListInfoIcon} />{" "}
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color='primary'
            className={classes.loginSideTwitterIcon}
          />
          <Typography
            className={classes.loginSideTitle}
            gutterBottom
            variant='h4'
          >
            Узнавайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 20 }}
            variant='contained'
            color='primary'
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickOpen}
            variant='outlined'
            color='primary'
            fullWidth
          >
            Войти
          </Button>
          <ModalBlock visible={visibleSignIn} onClose={handleClose} classes={classes} title='Войти в аккаунт'>
            <FormControl component='fieldset' fullWidth>
              <FormGroup aria-label='position' row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id='email'
                  label='E-mail'
                  type='email'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id='password'
                  label='Пароль'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='filled'
                  type='password'
                  fullWidth
                />
                <Button
                  onClick={handleClose}
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Войти
                </Button>
                <br />
                <br />
                <br />
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
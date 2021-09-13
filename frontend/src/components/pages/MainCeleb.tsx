import React from "react";
import "./MainCeleb.css";
import Container from "@material-ui/core/Container";
import { useParams, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardsize: {},
    cardpackimg: {},
  })
);

function MainCeleb(): JSX.Element {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const { celeb } = useParams<{ celeb: string }>();
  return (
    <div>
      <Container>
        <h3>{celeb}의 메인페이지</h3>
        <div>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                  <Grid key={value} item>
                    <Card className={classes.cardsize}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          {celeb} 2021년형 카드
                        </Typography>
                      </CardContent>
                      <div>
                        <img
                          className={classes.cardpackimg}
                          src="https://contents.lotteon.com/itemimage/_v102419/LO/15/50/54/78/79/_1/55/05/47/88/0/LO1550547879_1550547880_1.jpg/dims/resizemc/400x400"
                          alt=""
                        />
                      </div>
                      <CardActions>
                        <Button style={{ margin: "auto" }}>
                          <Link className="linkto" to="/cardpackdetail/1">
                            BUY
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MainCeleb;

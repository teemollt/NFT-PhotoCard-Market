import React from "react";
import "./CardpackReview.css";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function CardpackReview(props: any): JSX.Element {
  return (
    <div>
      <div>
        {props.reviews.map((review: any) => {
          return (
            <div key={review.reviewPK} style={{ textAlign: "center" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {review.reviewUser}
                      </Typography>
                      &nbsp;&nbsp;&nbsp;&nbsp;{review.reviewDate.slice(0, 10)}
                      {review.reviewDate.slice(14, 19)}
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      ></Typography>
                      <p>{review.reviewContent}</p>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardpackReview;

import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./ItemCard.css";

function ItemCard() {
  function clickItemCard() {
    alert("제품클릭");
  }

  return (
    <div>
      <Card className="itemcard">
        <CardActionArea className="itemcardcontent">
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <img
                src="/images/슈스케춤신춤왕움짤.gif"
                alt=""
                className="image"
              />
            </Typography>
          </CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Typography color="textSecondary">10 btc</Typography>
            <Button onClick={clickItemCard}>Detail</Button>
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ItemCard;

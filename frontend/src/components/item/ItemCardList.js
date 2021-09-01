import "./ItemCardList.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "./ItemCard";


function ItemList() {
  return (
    <div className="itemcardlist">
      <Grid container spacing={3} className="grid">
        <Grid item xs={6} sm={3}>
          <ItemCard/>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemList;

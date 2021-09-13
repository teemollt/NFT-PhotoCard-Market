import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import "./MainAuctionBody.css";
import AuctionItem from "./AuctionItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: "300px",
    },
  })
);
const tempGallery: Array<temp> = [
  {
    id: 1,
    imgUrl:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg",
    title: "아이유꽃",
    level: "S",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 2,
    imgUrl:
      "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg",
    title: "여신",
    level: "A",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 3,
    imgUrl:
      "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg",
    title: "연합뉴스",
    level: "A",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 4,
    imgUrl:
      "http://image.kmib.co.kr/online_image/2020/1008/611811110015088768_1.jpg",
    title: "똥머리",
    level: "B",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 5,
    imgUrl:
      "https://cdn.dailyimpact.co.kr/news/photo/201901/50650_10024_2221.jpg",
    title: "흑백",
    level: "B",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 6,
    imgUrl:
      "http://www.polinews.co.kr/data/photos/20200834/art_15980031118376_e6a761.jpg",
    title: "정장",
    level: "B",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 7,
    imgUrl: "https://newsimg.sedaily.com/2021/03/24/22JXKJ0JJZ_1.jpg",
    title: "블랙야크",
    level: "B",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 8,
    imgUrl: "https://pbs.twimg.com/media/E9jOv0aUYAw6SIA.jpg",
    title: "하얀색",
    level: "C",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 9,
    imgUrl: "https://cdn.baccro.com/news/photo/202103/25534_57525_3959.jpeg",
    title: "라일락",
    level: "C",
    celeb: "1",
    price: "1btc",
  },
  {
    id: 10,
    imgUrl:
      "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7mo5/image/RhMj77_UZ1G9smD_INrbLKRVVoc.jpg",
    title: "블루밍",
    level: "C",
    celeb: "1",
    price: "1btc",
  },
];

export type temp = {
  id: number;
  imgUrl: string;
  title: string;
  level: string;
  celeb: string;
  price: string;
};

function MainAuctionBody() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          {tempGallery.map((image) => (
            <AuctionItem image={image} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MainAuctionBody;

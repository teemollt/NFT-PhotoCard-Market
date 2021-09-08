import React from "react";
import Container from "@material-ui/core/Container";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "No.", width: 100 },
  {
    field: "seller",
    headerName: "Seller",
    width: 150,
  },
  {
    field: "celeb",
    headerName: "Celebrity",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 260,
  },
  {
    field: "price",
    headerName: "price",
    type: "number",
    width: 150,
    description: "경매에 참여하지 않고 즉시 구입할 수 있는 금액",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "startDate",
    headerName: "Start Date",
    type: "date",
    description: "경매가 시작된 날",
    sortable: true,
    width: 150,
  },
  {
    field: "endDate",
    headerName: "End Date",
    type: "date",
    description: "경매가 종료되는 날",
    sortable: true,
    width: 150,
  },
  {
    field: "result",
    headerName: "完",
    type: "boolean",
    description: "낙찰유무",
    sortable: true,
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    seller: "Snow",
    celeb: "Jon1",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 2,
    seller: "Snow",
    celeb: "Jon2",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 3,
    seller: "Snow",
    celeb: "Jon3",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 4,
    seller: "Snow",
    celeb: "Jon4",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 5,
    seller: "Snow",
    celeb: "Jon5",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 6,
    seller: "Snow",
    celeb: "Jon6",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 7,
    seller: "Snow",
    celeb: "Jon7",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 8,
    seller: "Snow",
    celeb: "Jon8",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 9,
    seller: "Snow",
    celeb: "Jon9",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 10,
    seller: "Snow",
    celeb: "Jon100",
    description: "아이유S급 팔아adsfasdf요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 11,
    seller: "Snow",
    celeb: "Jon12312",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 12,
    seller: "Snow",
    celeb: "Jon",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
  {
    id: 13,
    seller: "Snow",
    celeb: "Jon",
    description: "아이유S급 팔아요 선제 ㄱㄱ",
    price: 100000000,
    startDate: "2021-09-07",
    endDate: "2021-09-10",
    result: true,
  },
];

function MainBid(): JSX.Element {
  let history = useHistory();
  function getitem(data: any): object {
    let itemid: number = data.id;
    console.log(data);
    history.push(`/biditem/${itemid}`);
    return data;
  }
  return (
    <div>
      <Container>
        <div style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            onRowClick={(param) => {
              getitem(param.row);
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default MainBid;

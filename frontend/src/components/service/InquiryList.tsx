import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root1: {
      marginTop: "10px",
      textAlign: "center",
    },
    inline: {
      display: "inline",
    },
    margin: {
      width: "100%",
      maxWidth: "900px",
      margin: "auto",
    },
    container: {
      width: "800px",
      margin: "auto",
    },
    createicon: {
      cursor: "pointer",
    },
  })
);

//
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// function createData(name: string, calories: number, fat: number) {
//   return { name, calories, fat };
// }

//
function InquiryList(props: any) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let [rows, setrows] = useState<any[]>([]);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  useEffect(() => {
    // 내 문의사항 가져오기
    axios.get("/api/saleCard").then((res) => {
      console.log(res.data.res);
      setrows(res.data.res);
    });
  }, []);

  let [inq, setinq] = useState<string>("");
  // 문의남기기
  function createinquiry() {
    axios
      .post(
        `/api/`,
        {
          inquiryContent: inq,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((res) => {
        setinq("");
      })
      .catch();
  }
  return (
    <div>
      <div>
        <h1>1:1 Service</h1>
      </div>
      <div className={classes.root1}>
        <TextField
          id="standard-basic"
          label="문의사항을 남겨주세요"
          variant="standard"
          style={{ width: "700px" }}
          value={inq}
          multiline
          onChange={(e) => {
            setinq(e.target.value);
          }}
        />
        <CreateIcon
          fontSize="large"
          className={classes.createicon}
          onClick={() => {
            createinquiry();
          }}
        />
        <Container className={classes.container}>
          <br />
          {/* 문의사항 리스트 */}
          <div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 500 }}
                aria-label="custom pagination table"
              >
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row) => (
                    <TableRow
                      onClick={() => {
                        console.log(row.salesNo);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ width: "100px" }}
                      >
                        {row.salesNo}
                      </TableCell>
                      <TableCell style={{}} align="left">
                        {row.salesDetail}
                      </TableCell>
                      <TableCell style={{ width: "150px" }} align="left">
                        {row.salesDetail}
                      </TableCell>
                      <TableCell style={{ width: "150px" }} align="left">
                        {row.salesDetail}
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default InquiryList;

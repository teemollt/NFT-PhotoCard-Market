import React from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import EachInquiry from "./EachInquiry";
import WriteInquiry from "./WriteInquiry";

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  })
);

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
  const classes = useStyles1();
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
    <div className={classes.root}>
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
    </div>
  );
}

function createData(
  id: number,
  title: string,
  content: string,
  date: string,
  reply: boolean
) {
  return { id, title, content, date, reply };
}
// 데이터
const rows = [
  createData(
    1,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ1",
    "2021-09-08",
    false
  ),
  createData(
    2,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ2",
    "2021-09-08",
    true
  ),
  createData(
    3,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ3",
    "2021-09-08",
    true
  ),
  createData(
    4,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ4",
    "2021-09-08",
    true
  ),
  createData(
    5,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ5",
    "2021-09-08",
    true
  ),
  createData(
    6,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ6",
    "2021-09-08",
    true
  ),
  createData(
    7,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ7",
    "2021-09-08",
    true
  ),
  createData(
    8,
    "title1",
    "환불좀해주세요. 이상한카드만 나와요 ㅠㅠ8",
    "2021-09-08",
    true
  ),
].sort((a, b) => b.id - a.id);

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

function Inquiry(): JSX.Element {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.content}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ width: "400px" }}
                >
                  <EachInquiry
                    id={row.id}
                    title={row.title}
                    content={row.content}
                  />
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.date}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.reply}
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
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
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
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <WriteInquiry />
      </div>
    </div>
  );
}

export default Inquiry;

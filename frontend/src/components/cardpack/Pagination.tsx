import React from "react";
import "./Pagination.css";
import { Button } from "@material-ui/core";

function Pagination(props: any) {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalReviews / props.reviewsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number: number) => {
          return (
            <Button
              onClick={() => {
                props.paginate(number);
              }}
            >
              {number}
            </Button>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;

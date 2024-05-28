import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

const PaginationCompontent = (props: {
  handlePageChange: (newPage: number) => void;
  page: number;
  totalPages: number;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          onClick={() => props.handlePageChange(props.page - 1)}
        />
        {props.page >= 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => props.handlePageChange(0)}>
              0
            </PaginationLink>
          </PaginationItem>
        )}
        {props.page > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {props.page > 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => props.handlePageChange(props.page - 1)}
            >
              {props.page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{props.page}</PaginationLink>
        </PaginationItem>
        {props.page < props.totalPages && (
          <PaginationItem>
            <PaginationLink
              onClick={() => props.handlePageChange(props.page + 1)}
            >
              {props.page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {props.page < props.totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {props.page < props.totalPages - 1 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => props.handlePageChange(props.totalPages)}
            >
              {props.totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationNext
          onClick={() => props.handlePageChange(props.page + 1)}
        />
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationCompontent;

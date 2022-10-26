import BootstrapPagination from 'react-bootstrap/Pagination';

export function Pagination ({
  activePage, pagesArray, changePage
}) {
  return (
      <BootstrapPagination>
        <BootstrapPagination.Prev
          disabled={activePage === 1}
          onClick={()=> changePage(activePage - 1)}
        />

        {pagesArray.map(page => (
            <BootstrapPagination.Item
              active={page === activePage}
              key={page}
              onClick={()=> changePage(page)}
            >
              {page}
            </BootstrapPagination.Item>
        ))}

        <BootstrapPagination.Next
          disabled={activePage === pagesArray[pagesArray.length - 1]}
          onClick={()=> changePage(activePage + 1)}
        />
      </BootstrapPagination>
  );
}

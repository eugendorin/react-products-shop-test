import { useMemo, useState } from "react";

export const usePaginatedItems = (items, initialPage = 1, itemsPerPage = 5) => {
  const [pageIndex, setPageIndex] = useState(initialPage - 1);
  const pageItems = items.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage);
  const page = pageIndex + 1;
  const changePage = (pageNumber) => setPageIndex(pageNumber - 1);

  const pagesArray = useMemo(() => {
    const totalPages = Math.floor(items.length / itemsPerPage);
    return [...Array(totalPages).keys()].map((item) => item + 1);
  }, [items, itemsPerPage]);

  return [pageItems, page, changePage, pagesArray];
};

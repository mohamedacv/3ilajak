"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type DataTablePaginationProps = {
  page: number;
  totalPages: number;
  // onPageChange: (page: number) => void;
};

export default function DataTablePagination({
  page,
  totalPages,
  // onPageChange,
}: DataTablePaginationProps) {
  const visiblePages = 5;
  const half = Math.floor(visiblePages / 2);

  let startPage = Math.max(page - half, 1);
  let endPage = startPage + visiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl">
      <p className="text-muted-foreground text-sm">
        Page <span className="font-medium"> : {page}</span> of
        <span className="font-medium"> {totalPages}</span>
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={page === 1}
          // onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {pages.map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={page === pageNumber ? "default" : "outline"}
            size="icon"
            // onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          disabled={page === totalPages}
          // onClick={() => onPageChange(page + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

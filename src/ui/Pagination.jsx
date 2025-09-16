import { useEffect, useState } from "react";
import { api } from "../config/axios";
import { useTranslation } from "react-i18next";

function Pagination({ url, render }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(-1);
  const [itemsPerPage, setItemsPerPage] = useState(-1);
  const [t, i18n] = useTranslation("Common");
  useEffect(() => {
    async function getPage() {
      setLoading(true);
      const res = await api.get(`${url}?page=${currentPage}`, {
        headers: { lang: i18n.language },
      });

      const {
        data: {
          data: {
            data: renderedData,
            pagination: { total, per_page },
          },
        },
      } = res;
      if (itemsPerPage === -1) {
        setItemsPerPage(per_page);
      }
      if (totalPages === -1) {
        setTotalPages(Math.ceil(total / per_page));
      }
      setData(renderedData);
      setLoading(false);
    }
    getPage(currentPage);
  }, [currentPage, i18n.language]);

  return (
    <div className="p-5">
      {render(data, loading)}
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded bg-primary text-white disabled:bg-[#ccc] "
          >
            {t("Prev")}
          </button>

          {<div className={`px-3 py-1 border rounded `}>{currentPage}</div>}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded bg-primary text-white disabled:bg-[#ccc]"
          >
            {t("Next")}
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;

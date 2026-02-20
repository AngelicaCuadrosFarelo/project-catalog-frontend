import "./Pagination.css";

export function Pagination({ currentPage, totalPages, onPageChage }) {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChage(currentPage - 1)}
        disabled={currentPage - 1 < 1}
      >
        Anterior
      </button>
      <p>
        pagina {currentPage} de {totalPages}{" "}
      </p>
      <button
        onClick={() => onPageChage(currentPage + 1)}
        disabled={currentPage + 1 > totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}


import { useState } from "react" 
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

export default function Pagination({ totalPages = 5 }) {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageSelect = (page) => {
    setCurrentPage(page)
  }

  return (
    <nav className="d-flex align-items-center justify-content-center   panigationComponent">
      <button
        onClick={handlePrevClick}
        className={`btn btn-link text-decoration-none panigationBtn ${currentPage === 1 ? "text-muted" : "text-dark"}`}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack className="me-1" />
        <span>Prev</span>
      </button>

      <div className="dropdown">
        <button
          className="btn btn-dark px-4 py-3 rounded-3 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {currentPage}
        </button>
        <ul className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto" }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                className={`dropdown-item ${page === currentPage ? "active" : ""}`}
                onClick={() => handlePageSelect(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <span className="text-muted">of {totalPages}</span>

      <button
        onClick={handleNextClick}
        className={`btn btn-link text-decoration-none panigationBtn ${currentPage === totalPages ? "text-muted" : "text-dark"}`}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <IoIosArrowForward  className="ms-1" />
      </button>
    </nav>
  )
}

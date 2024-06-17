import ReactPaginate from "react-paginate";

const Paginat = (props) => {
    function handlePageClick(data) {
  
      props.getPaginate(data.selected+1)
    }
    const pageCount =500
     return (
       <>
         {/* <Items currentItems={currentItems} /> */}
         <ReactPaginate
           breakLabel="..."
           nextLabel="التالي"
           onPageChange={handlePageClick}
           marginPagesDisplayed={1}
           pageRangeDisplayed={1}
           pageCount={pageCount}
           previousLabel="السابق"
           renderOnZeroPageCount={null}
           containerClassName="pagination justify-content-center p-3"
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item"
           previousLinkClassName="page-link"
           nextClassName="page-item"
                 nextLinkClassName="page-link"
                 breakClassName="page-item"
                 breakLinkClassName="page-link"
                 activeClassName="active"
                 
         />
       </>
     );
}
export default Paginat;
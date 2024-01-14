import { useState, useEffect } from 'react';

export const useProductsPaginate = (search, initialPage) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(`/api/products/?search=${search}&page=${currentPage}`);
        if (!response.ok) {
          throw new Error(`Error al cargar productos. Código HTTP: ${response.status}`);
        }

        const data = await response.json();

        setProducts((prevProducts) => [...prevProducts, ...data.data]);
        setTotalPages(data.last_page);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, currentPage]);

  const loadNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return { loading, error, products, currentPage, totalPages, loadNextPage };
};

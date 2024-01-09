// useFilterSearch.js
import { useState, useEffect } from 'react';

const useFilterSearch = () => {
  const [filtro, setFiltro] = useState({
    fechaDesde: '',
    fechaHasta: '',
    precioMin: '',
    precioMax: '',
    esEcologico: false,
  });
  const [filteredData, setFilteredData] = useState([]);

  const applyFilters = () => {
    // You can perform additional actions here before applying filters if needed
    // Triggering useEffect to apply the filtering logic
    setFilteredData([]);
  };

  useEffect(() => {
    // Implement your actual filtering logic here based on the filtro object
    // This is a placeholder logic, replace it with your own logic
    const newData = []; // Implement your filtering logic here
    setFilteredData(newData);
    console.log(filtro)
  }, [filtro]);



  const resetFilters = () => {
    // You can reset the filtro object and perform any additional actions if needed
    setFiltro({
      fechaDesde: '',
      fechaHasta: '',
      precioMin: '',
      precioMax: '',
      esEcologico: false,
    });
  };

  return { filtro, setFiltro, filteredData, applyFilters, resetFilters };
};

export default useFilterSearch;

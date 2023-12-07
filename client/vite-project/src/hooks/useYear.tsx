import { useEffect, useState } from 'react';

export const useYear = (start, end) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const range = Array.from({ length: currentYear - start + 1 }, (_, index) => start + index);
    const formattedYearsData = range.map((year) => ({ value: year, label: year.toString() }));
    setYears(formattedYearsData);
  }, [start]);

  return years;
}
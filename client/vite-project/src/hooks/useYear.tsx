import { useEffect, useState } from 'react';

export const useYear = (start, end) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const rangeEnd = end || currentYear - 18;
    const range = Array.from({ length: rangeEnd - start + 1 }, (_, index) => start + index);
    const formattedYearsData = range.map((year) => ({ value: year, label: year.toString() }));
    setYears(formattedYearsData);
  }, [start, end]);
return years;
}
export interface IPeriod {
  id: string;
  description: string;
  index: number;
}

const CURRENT_YEAR = new Date().getFullYear();
const GLOBAL_YEARS = [CURRENT_YEAR - 1, CURRENT_YEAR, CURRENT_YEAR + 1];
const GLOBAL_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MONTH_DESCRIPTIONS = [
  '',
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

let allPeriods = [] as IPeriod[];

function processPeriods(): void {
  allPeriods = [] as IPeriod[];
  let index = 0;

  GLOBAL_YEARS.forEach(year => {
    GLOBAL_MONTHS.forEach(month => {
      const id = `${year}-${month.toString().padStart(2, '0')}`;
      const monthDescription = `${MONTH_DESCRIPTIONS[month]}/${year}`;

      allPeriods.push({ id, description: monthDescription, index: index++ });
    });
  });
}

function generagePeriods() {
  if (allPeriods.length === 0) {
    processPeriods();
  }

  return allPeriods;
}

export default generagePeriods;

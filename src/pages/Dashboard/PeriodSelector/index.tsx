import React from 'react';
import { useTheme } from 'styled-components';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IPeriod } from '../../../utils/generate-periods';
import { Container, ArrowButton } from './styles';

interface IProps {
  allPeriods: IPeriod[];
  selectedPeriod: IPeriod;
  handleChangePeriod(newPeriod: IPeriod): void;
}

const PeriodSelector = ({
  allPeriods,
  selectedPeriod,
  handleChangePeriod,
}: IProps) => {
  const { primary } = useTheme().colors;

  const handleSelectChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangePeriod(
      allPeriods.find(period => period.id === target.value) || {
        ...allPeriods[0],
      },
    );
  };

  const handleLeftButtonClick = () => {
    const index = allPeriods.findIndex(item => item.id === selectedPeriod.id);

    handleChangePeriod(allPeriods[index - 1]);
  };

  const handleRightButtonClick = () => {
    const index = allPeriods.findIndex(item => item.id === selectedPeriod.id);

    handleChangePeriod(allPeriods[index + 1]);
  };

  return (
    <Container>
      <ArrowButton
        color={primary}
        onClick={handleLeftButtonClick}
        disabled={selectedPeriod.index === 0}
      >
        <FiChevronLeft size={24} />
      </ArrowButton>

      <select value={selectedPeriod.id} onChange={handleSelectChange}>
        {allPeriods.map(periodOp => (
          <option key={periodOp.id} value={periodOp.id}>
            {periodOp.description}
          </option>
        ))}
      </select>

      <ArrowButton
        color={primary}
        onClick={handleRightButtonClick}
        disabled={selectedPeriod.index === allPeriods.length - 1}
      >
        <FiChevronRight size={24} />
      </ArrowButton>
    </Container>
  );
};

export default PeriodSelector;

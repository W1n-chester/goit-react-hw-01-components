import {
  StatisticsSection,
  StatTitle,
  StatList,
  StatItem,
  StatLable,
  StatPercentage,
} from './statistics.styled';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats = [] }) => {
  return (
    <StatisticsSection>
      <div>
        {title && <StatTitle>{title}</StatTitle>}
        <StatList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <StatItem key={id}>
                <StatLable>{label}</StatLable>
                <StatPercentage>{percentage}%</StatPercentage>
              </StatItem>
            );
          })}
        </StatList>
      </div>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

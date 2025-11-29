import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { useMemo } from 'react';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const a = useMemo(
    () =>
      Math.random() > 0.1
        ? (item: any) => {
            const getLeafType = (ele?: any): any => {
              return [false];
            };
          }
        : () => false,
    [],
  );
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;

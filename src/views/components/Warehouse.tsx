import { FC } from 'react'
import { Card, Descriptions, Statistic } from 'antd'
import CountUp from 'react-countup'
import { valueType } from 'antd/es/statistic/utils'

const formatter = (value: valueType) => (
  <CountUp end={value as unknown as number} separator="," />
)
// 仓库数据
const WareHouse: FC = () => {
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Descriptions
        title={'物资'}
        column={{ xs: 5, sm: 5, md: 10 }}
        size="small"
      >
        <Descriptions.Item>
          <Statistic title={'木材'} value={100} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'石头'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'铁矿'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'铜矿'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'银矿'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'金矿'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'石油'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'水晶'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'机核'} value={0} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'火药'} value={0} formatter={formatter} />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default WareHouse

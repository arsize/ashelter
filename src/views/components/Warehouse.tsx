import { FC } from 'react'
import { Card, Descriptions, Statistic } from 'antd'
import CountUp from 'react-countup'
import { valueType } from 'antd/es/statistic/utils'
import useWareStore from '@/store/ware'

const formatter = (value: valueType) => (
  <CountUp end={value as unknown as number} separator="," />
)
// 仓库数据
const WareHouse: FC = () => {
  const ware = useWareStore()
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Descriptions
        title={'物资'}
        column={{ xs: 5, sm: 5, md: 10 }}
        size="small"
      >
        <Descriptions.Item>
          <Statistic title={'木材'} value={ware.wood} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'石头'} value={ware.stone} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'铁矿'} value={ware.iron} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'铜矿'} value={ware.copper} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'银矿'} value={ware.silver} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'金矿'} value={ware.gold} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'石油'} value={ware.oil} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic
            title={'水晶'}
            value={ware.crystal}
            formatter={formatter}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic title={'机核'} value={ware.core} formatter={formatter} />
        </Descriptions.Item>
        <Descriptions.Item>
          <Statistic
            title={'火药'}
            value={ware.gunpowder}
            formatter={formatter}
          />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default WareHouse

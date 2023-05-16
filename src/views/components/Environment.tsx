import { FC } from 'react'
import { Card, Descriptions } from 'antd'
import { useNowTime } from '@/hooks'

// 环境状态数据
const Environment: FC = () => {
  const time = useNowTime()

  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Descriptions column={{ xs: 3, sm: 4, md: 6 }} size="small">
        <Descriptions.Item label="天气">多云</Descriptions.Item>
        <Descriptions.Item label="湿度">80%</Descriptions.Item>
        <Descriptions.Item label="降雨概率">90%</Descriptions.Item>

        <Descriptions.Item label="风速">大风</Descriptions.Item>
        <Descriptions.Item label="温度">30℃</Descriptions.Item>
        <Descriptions.Item label="随机灾害">10%</Descriptions.Item>
        <Descriptions.Item label="季节">夏</Descriptions.Item>
        <Descriptions.Item label="光线">明亮</Descriptions.Item>
        <Descriptions.Item label="时间">{time}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default Environment

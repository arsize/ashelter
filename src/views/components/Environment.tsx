import { FC } from 'react'
import { Card, Descriptions } from 'antd'

// 环境状态数据
const Environment: FC = () => {
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Descriptions column={{ xs: 3, sm: 4, md: 6 }} size="small">
        <Descriptions.Item label="天气">多云</Descriptions.Item>
        <Descriptions.Item label="湿度">80%</Descriptions.Item>
        <Descriptions.Item label="降雨概率">90%</Descriptions.Item>

        <Descriptions.Item label="风速">大风</Descriptions.Item>
        <Descriptions.Item label="温度">30℃</Descriptions.Item>
        <Descriptions.Item label="随机灾害">10%</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default Environment

import { FC } from 'react'
import { Card, Descriptions, Skeleton } from 'antd'
import { useByTime } from '@/hooks'
import useEnvStore from '@/store/envInfo'

// 环境状态数据
const Environment: FC = () => {
  const time = useByTime()
  const envInfo = useEnvStore()

  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Descriptions column={{ xs: 3, sm: 4, md: 6 }} size="small">
        <Descriptions.Item label="天气">{envInfo.weather}</Descriptions.Item>
        <Descriptions.Item label="湿度">{envInfo.humidity}</Descriptions.Item>
        <Descriptions.Item label="降雨概率">
          {envInfo.rainfall}
        </Descriptions.Item>

        <Descriptions.Item label="风速">{envInfo.wind}</Descriptions.Item>
        <Descriptions.Item label="温度">
          {envInfo.temperature}
        </Descriptions.Item>
        <Descriptions.Item label="随机灾害">
          {envInfo.disaster}
        </Descriptions.Item>
        <Descriptions.Item label="季节">{envInfo.season}</Descriptions.Item>
        <Descriptions.Item label="光线">{envInfo.light}</Descriptions.Item>
        <Descriptions.Item label="时间">
          {time ? time : '...'}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default Environment

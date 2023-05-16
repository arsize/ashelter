import { FC } from 'react'
import { Card, Progress, Descriptions } from 'antd'
import useRoleStasStore from '@/store/roleState'

// 人物角色数据
const Statistics: FC = () => {
  const userInfo = useRoleStasStore()
  return (
    <Card bordered={true} style={{ width: '100%' }}>
      <Descriptions
        title={'状态'}
        size="small"
        column={{ xs: 3, sm: 4, md: 6 }}
      >
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={userInfo.life}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`生命:${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={userInfo.hunger}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`饱腹:${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={userInfo.thirsty}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`口渴:${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={userInfo.endurance}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`耐力:${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={userInfo.temperature}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`体温:${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={userInfo.san}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`SAN:${percent}`}</span>
            )}
          />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default Statistics

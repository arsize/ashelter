import { FC } from 'react'
import { Card, Progress, Descriptions } from 'antd'

// 人物角色数据
const Statistics: FC = () => {
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
            percent={100}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`生命：${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={10}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`饱腹：${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={10}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`口渴：${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={10}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`耐力：${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={10}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`体温：${percent}`}</span>
            )}
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <Progress
            type="circle"
            percent={10}
            size={80}
            format={(percent) => (
              <span style={{ fontSize: '13px' }}>{`SAN：${percent}`}</span>
            )}
          />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default Statistics

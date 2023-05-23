import { FC } from 'react'
import { Card, Descriptions, Progress } from 'antd'
import { G } from '@/config'
import useRoleStasStore from '@/store/roleHealth'

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
        {G.healthInfo.map((item, i) => (
          <Descriptions.Item key={i}>
            <Progress
              type="circle"
              percent={userInfo[item.key]}
              size={80}
              format={(percent) => (
                <span
                  style={{ fontSize: '13px' }}
                >{`${item.title}:${percent}`}</span>
              )}
            />
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Card>
  )
}

export default Statistics

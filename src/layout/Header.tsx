import { Card, Space } from 'antd'
import { FC } from 'react'
import Btn from '@/views/components/ToolsBtn'
import {
  AddBusinessTwotone,
  WarehouseOutlined,
  ScienceOutlined,
  SettingsOutlined,
  HikingOutlined,
} from '@ricons/material'
import { AddressCardRegular } from '@ricons/fa'
import styled from 'styled-components'

const Header: FC = () => {
  const handleShow = () => {
    console.log('todo')
  }
  console.log(handleShow())

  return (
    <Card style={{ width: '100%' }}>
      <Line>
        <div className="left">
          <Space size={'large'}>
            <Btn
              onClick={handleShow}
              title="建造"
              icon={<AddBusinessTwotone />}
            />
            <Btn title="仓库" icon={<WarehouseOutlined />} />
            <Btn title="研究" icon={<ScienceOutlined />} />
          </Space>
        </div>
        <div className="right">
          <Space size={'large'}>
            <Btn title="装备" icon={<AddressCardRegular />} />
            <Btn title="探索" icon={<HikingOutlined />} />
            <Btn title="设置" icon={<SettingsOutlined />} />
          </Space>
        </div>
      </Line>
    </Card>
  )
}

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  @media (max-width: 580px) {
    justify-content: center;
    .right {
      margin-top: 10px;
    }
  }
`

export default Header

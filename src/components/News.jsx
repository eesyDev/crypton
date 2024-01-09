import React, { useState } from 'react';
import { Select, Typography, Row, Col, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;


const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  const [newsData, setNewsData] = useState(cryptoNews?.coindesk || [])

  if (!cryptoNews?.coindesk) return 'Loading...'
  return (
    <Row gutter={[24, 24]}>
      {
        newsData.map((news, i) => (
          <Col key={i} lg={8} sm={12} xs={24}>
            <Card hoverable>
              <a href={news.url} target="__blank">
                <Title level="5">
                  {news.title}
                </Title>
                <p>{news.description}</p>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default News
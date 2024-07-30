import React from 'react';
import Masonry from 'react-masonry-css';
import { Layout, Card, Tag, Typography } from 'antd';
import './styles.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const data = [
    {
        date: '2024-07-28',
        content: 'これは1つ目のカードの本文です。この本文は約200文字程度の長さになるように調整されています。Ant Designを使用してカードコンポーネントを作成し、日付、本文、そしてタグを表示しています。タグは青系の背景色で角丸のデザインになっています。',
        location: '東京',
        tags: ['React', 'Ant Design']
    },
    {
        date: '2024-07-29',
        content: 'これは2つ目のカードの本文です。こちらも約200文字程度の長さになるように調整されています。各カードには日付、本文、そして2つのタグが含まれています。このようなデザインはブログの投稿や記事のリストを表示するのに適しています。',
        location: '大阪',
        tags: ['JavaScript', 'UI/UX']
    },
    {
        date: '2024-07-30',
        content: '3つ目のカードです。MacBook Air 13インチのディスプレイサイズで1列に3枚のカードが表示されるようにレイアウトを調整しました。レスポンシブデザインを適用しているので、画面サイズに応じてカードの配置が変わります。',
        location: '名古屋',
        tags: ['レイアウト', 'レスポンシブ']
    },
    {
        date: '2024-07-31',
        content: 'これは4つ目のカードの本文です。本文の長さが他のカードとは異なりますが、高さを統一して見栄えを良くします。',
        location: '福岡',
        tags: ['CSS', 'Flexbox']
    }
];

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

const App = () => (
    <Layout>
        <Header className="header">
            <div className="logo">
                <Title level={3}>日々の学び</Title>
            </div>
        </Header>
        <Content className="content">
            <div className="site-layout-content">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column">
                    {data.map(item => (
                        <Card title={item.date} className="custom-card" key={item.date}>
                            <p>{item.content}</p>
                            <p><strong>場所: </strong>{item.location}</p>
                            <div>
                                {item.tags.map(tag => (
                                    <Tag color="blue" key={tag} className="clickable-tag">
                                        {tag}
                                    </Tag>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Masonry>
            </div>
        </Content>
    </Layout>
);

export default App;
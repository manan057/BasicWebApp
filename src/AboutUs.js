import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

function AboutUs() {
    return (
        <Typography>
          <Title style={{ textAlign: 'center' }}>About Us</Title>
          <Paragraph>
            After massive project practice and summaries, <Text code>Ant Design</Text>, a design language for background
            applications, is refined by Ant UED Team, which aims to
            <Text strong>
              uniform the user interface specs for internal background projects, lower the unnecessary
              cost of design differences and implementation and liberate the resources of design and
              front-end development
            </Text>.
          </Paragraph>
        </Typography>
    );
}

export default AboutUs;
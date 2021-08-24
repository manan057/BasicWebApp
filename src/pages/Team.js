import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

function Team() {
    return (
        <Typography>
          <Title style={{ textAlign: 'center' }}>Team</Title>
          <Paragraph>
            This is a test for Teams page
          </Paragraph>
        </Typography>
    );
}

export default Team;
import {Component} from "react";
import {Row,Col, Card} from "antd";
const { Meta } = Card;


export default class Home extends Component{
    render() {
        return (
            <div>
                <Row>
                    <Col span={6} push={2}>
                        <a href="/management/Temperature">
                            <Card
                                hoverable
                                style={{ width: 240, height:400 }}
                                cover={<img alt="temperature" src="/static/images/temperature.png" />}
                            >
                                <Meta title="Temperature" />
                            </Card>
                        </a>
                    </Col>
                    <Col span={6} push={4}>
                        <a href="/management/PH Value">
                            <Card
                                hoverable
                                style={{ width: 240, height:400 }}
                                cover={<img alt="temperature" src="/static/images/ph.jpeg" />}
                            >
                                <Meta title="PH Value" />
                            </Card>
                        </a>
                    </Col>
                    <Col span={6} push={6}>
                        <a href="/management/Stirring Speed">
                            <Card
                                hoverable
                                style={{ width: 240, height:400 }}
                                cover={<img alt="temperature" src="/static/images/stirring.png" />}
                            >
                                <Meta title="Stirring Speed"/>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}












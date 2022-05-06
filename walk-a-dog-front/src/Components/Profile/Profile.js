import { Container, Row, Col, Image } from 'react-bootstrap';

function Profile(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src='https://randomuser.me/api/portraits/men/22.jpg' roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col>Adres e-mail:</Col>
                <Col>{props.user?.email}</Col>
            </Row>
            <Row>
                <Col>Imie i nazwisko:</Col>
                <Col>{props.user?.name}</Col>
            </Row>
            <Row>
                <Col>Ulica i numer domu:</Col>
                <Col>{props.user?.address.street} {props.user?.address.suite}</Col>
            </Row>
            <Row>
                <Col>Miasto i kod pocztowy:</Col>
                <Col>{props.user?.address.city} {props.user?.address.zipcode}</Col>
            </Row>
        </Container>
    );
}

export default Profile;
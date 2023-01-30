import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useFetchCompanyDetails } from "../../hooks/useFetchCompanyDetails";

import Image from 'react-bootstrap/Image'
import { Loader } from '../../components/common/loader';

export function CompanyDetails() {
    const [loading, companyDetails] = useFetchCompanyDetails()
    
    if (loading) {
        return <Loader />
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <p>{companyDetails?.name}</p>
                    <Image src={companyDetails?.logo}/>
                </Col>
                <Col>
                    <Col>Admin info:</Col>
                    <Row>
                        <Col>
                            <p>{companyDetails?.admin.first_name}</p>
                            <p>{companyDetails?.admin.last_name}</p>
                            <p>{companyDetails?.admin.email}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <p>Users: {companyDetails?.number_of_users}</p>
                <p>Active users: {companyDetails?.number_of_active_users}</p>
                <p>Address: {companyDetails?.server_address}</p>
            </Row>
        </Container>
    )
}
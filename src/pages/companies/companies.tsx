import { Link } from "react-router-dom";
import { useFetchCompanies } from "../../hooks/useFetchCompanies";
import { Loader } from "../../components/common/loader";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function CompaniesList() {
    const [loading, companies] = useFetchCompanies()
    
    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            {companies.map(company => (
                <Row key={company.id}>
                    <Col><p>{company.name}</p></Col>
                    <Col>
                        <Link to={`/details/${company.id}`}>
                            Details
                        </Link>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}
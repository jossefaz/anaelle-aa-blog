import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageContainer from "../../../container/CustomPage";
import PortfolioDetailsThumb from "./thumbnail";
import PortfolioDetailsContent from "./content";

const TemplatePortfolioDetails = ({ config }) => {
  const { previewImages, title, category, description, meta, videos } = config;
  return (
    <PageContainer classes={"bg-grey"}>
      <Container>
        <Row>
          <Col lg={7}>
            <PortfolioDetailsThumb images={previewImages} videos={videos} />
          </Col>

          <Col lg={5}>
            <PortfolioDetailsContent
              title={title}
              category={category}
              description={description}
              meta={meta}
            />
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default TemplatePortfolioDetails;

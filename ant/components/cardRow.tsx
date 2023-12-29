// DANNY NOTE
// Hmmmm.. this could be a problem
"use client";
// When the above is uncommented, I get this error:
// ⨯ Internal error: Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
// You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
// ah! I think this is the reason why: https://github.com/ant-design/ant-design-examples/blob/main/examples/with-nextjs-app-router-inline-style/src/app/with-sub-components/page.tsx#L1

import { Card, Col, Row } from "antd";

export default function CardExport() {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  );
}

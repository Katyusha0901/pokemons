import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Col, Row, Table } from "antd";
import { pokemonsListStore } from "../../../shared/stores/pokemonsListStore";
import { routes } from "../../../app/config/routes";

export const MainPage = observer(() => (
  <Row justify='center'>
    <Col style={{ width: 600, maxWidth: 600 }}>
      <Table
        dataSource={pokemonsListStore.list}
        columns={[
          { title: "Name", render: (_, { name }) => name },
          {
            render: (_, { name }) => (
              <Link to={routes.pokemon(name)}>See info</Link>
            ),
          },
        ]}
        pagination={{
          total: pokemonsListStore.totalCount,
          current: pokemonsListStore.currentPage,
          pageSize: pokemonsListStore.pageSize,
          onChange: pokemonsListStore.setPaginationInfo,
          position: ["topCenter", "bottomCenter"],
        }}
        loading={pokemonsListStore.isLoading}
      />
    </Col>
  </Row>
));

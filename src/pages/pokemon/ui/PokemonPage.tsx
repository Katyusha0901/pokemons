import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Collapse, Row } from "antd";
import { pokemonsListStore } from "../../../shared/stores/pokemonsListStore";
import { routes } from "../../../app/config/routes";

export const PokemonPage = observer(() => {
  const { name } = useParams<{ name: string }>();

  const pokemonStore = pokemonsListStore.getPokemon(name as string);
  const data = pokemonStore.data;

  return (
    <Row justify="center">
      <Col style={{ width: 400, maxWidth: 400 }}>
        <Card
          cover={
            data && <img alt="Pokemon" src={data?.sprites.front_default} />
          }
          loading={!data}
          extra={<Link to={routes.home}>Back to list</Link>}
        >
          <Card.Meta
            title={data?.name}
            description={`height: ${data?.height}, weight: ${data?.weight}`}
          />

          <Collapse
            style={{ marginTop: 30 }}
            items={[
              {
                key: 1,
                label: "Abilities",
                children: data?.abilities.map(({ ability }) => (
                  <p>{ability.name}</p>
                )),
              },
              {
                key: 2,
                label: "Moves",
                children: data?.moves.map(({ move }) => <p>{move.name}</p>),
              },
              {
                key: 3,
                label: "Types",
                children: data?.types.map(({ type }) => <p>{type.name}</p>),
              },
            ]}
          />
        </Card>
      </Col>
    </Row>
  );
});

import {
  Text,
  Card,
  Button,
  Spacer,
  Row,
  Badge,
  Grid,
} from "@nextui-org/react";

type Props = {
  title?: string;
  isActive?: boolean;
};

export const MockItem = ({ title, isActive }: Props) => {
  return (
    <Card css={{ mw: "330px" }}>
      <Card.Header>
        <Grid.Container gap={0} justify="space-between">
          <Grid xs={6} justify="flex-start">
            <Text b>{title}</Text>
          </Grid>
          <Grid xs={6} justify="flex-end">
            {isActive ? (
              <Badge color="success" size="sm">
                ACTIVE
              </Badge>
            ) : (
              <Badge color="error" size="sm">
                RESOLVED
              </Badge>
            )}
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-between">
          <Button size="sm" light>
            Cancel
          </Button>
          <Button size="sm">Agree</Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

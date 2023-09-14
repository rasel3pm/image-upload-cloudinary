import Card from "react-bootstrap/Card";

const PrfileCard = ({ name, image }) => {
  return (
    <Card className="shadow" style={{ width: "18rem" }}>
      {image.map((img) => {
        return <Card.Img variant="top" src={img["url"]} />;
      })}

      <Card.Body>
        <Card.Title>
          <span className="fs-5 text-success">{name}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PrfileCard;

import Button from '../core/Button/Button';
import '../css/componentTest.css';

function ComponentTest() {
  return (
    <main>
      <section>
        <Button>ABCD</Button>
        <Button variant="rounded">ABCD</Button>
        <Button variant="search">ABC</Button>
      </section>
      <section>
        <Button outline>ABCD</Button>
        <Button outline variant="rounded">
          ABCD
        </Button>
        <Button outline variant="search">
          ABC
        </Button>
      </section>
      <section>
        <Button glow>ABCD</Button>
        <Button glow variant="rounded">
          ABCD
        </Button>
        <Button glow variant="search">
          ABC
        </Button>
      </section>
      <section>
        <Button size="small">ABCD</Button>
        <Button size="small" variant="rounded">
          ABCD
        </Button>
        <Button size="small" variant="search">
          ABC
        </Button>
      </section>
      <section>
        <Button size="large">ABCD</Button>
        <Button size="large" variant="rounded">
          ABCD
        </Button>
        <Button size="large" variant="search">
          ABC
        </Button>
      </section>
      <section className="dark">
        <Button dark>ABCD</Button>
        <Button dark variant="rounded">
          ABCD
        </Button>
        <Button dark variant="search">
          ABC
        </Button>
      </section>
    </main>
  );
}

export default ComponentTest;

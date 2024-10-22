import { Button, Container, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI code reviews for{" "}
          <Text component="span" inherit className={classes.highlight}>
            any stack
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description} c={"dimmed"}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" c={"dark"} size="lg">
            Get started
          </Button>
          <Button className={classes.control} size="lg">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

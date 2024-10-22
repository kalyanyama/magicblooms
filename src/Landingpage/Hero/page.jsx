import { Button, Container, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Your Moments, Our{" "}
          <Text component="span" inherit className={classes.highlight}>
            Masterpiece
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description} c={"dimmed"}>
            From intimate gatherings to grand celebrations, we're dedicated to
            creating unforgettable experiences tailored to your unique vision.
            Our exquisite floral arrangements add a touch of elegance to every
            occasion.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            c={"dark"}
            size="lg"
          >
            Get started
          </Button>
          <Button className={classes.control} size="lg" variant="transparent">
            Contact team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

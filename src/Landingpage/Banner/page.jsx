import { Container, Image, SimpleGrid, Stack } from "@mantine/core";
import React from "react";
import classes from "./styles.module.css";

const Banner = () => {
  return (
    <Container mih={400} py="xl" my="xl">
      <SimpleGrid>
        <Image
          src={
            "https://img.staticmb.com/mbcontent//images/uploads/2022/5/wedding%20stage%20decoration.jpg"
          }
          h={300}
          className={classes.image}
        />
        <div>
          <h2>Our Philosophy</h2>
          <p>
            We are <strong>passionate floral designers</strong> and{" "}
            <strong>event planners</strong>, dedicated to transforming your
            visions into beautiful realities with our{" "}
            <em>exquisite floral creations</em> and{" "}
            <em>seamless event coordination</em>.
          </p>
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Banner;

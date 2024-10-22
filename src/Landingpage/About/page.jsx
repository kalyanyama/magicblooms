import {
  Button,
  Container,
  Image,
  SimpleGrid,
  TypographyStylesProvider,
  rem,
} from "@mantine/core";
import React from "react";
import { siteInformation } from "../../Content/Provider";
import classes from "./styles.module.css";

const Contact = () => {
  const PRIMARY_COL_HEIGHT = rem(500);
  return (
    <Container mt="xl" pt="xl" mih={900} id="about">
      <SimpleGrid spacing={50}>
        <TypographyStylesProvider mih={900} p={0}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <h1 >${siteInformation.name.toLocaleUpperCase()}</h1>
            <p>We are <strong>passionate floral designers</strong> and <strong>event planners</strong>, dedicated to transforming your visions into beautiful realities with our <em>exquisite floral creations</em> and <em>seamless event coordination</em>.</p>
            
            <h2>Our Philosophy</h2>
            <p>We believe in <strong>elegance in every detail</strong>. Every event we design reflects your <strong>unique style</strong>, ensuring a <em>truly personalized</em> and <em>unforgettable experience</em>.</p>
            
            <h2>Why Choose Us</h2>
            <p>With <strong>years of experience</strong>, a <strong>flair for creativity</strong>, and a <strong>dedication to excellence</strong>, we are committed to making your event <em>extraordinary</em>.</p>
            
            <h2>Our Services</h2>
            <ul>
              <li><strong>Custom Floral Arrangements:</strong> Tailored to your theme and preferences.</li>
              <li><strong>Event Planning & Coordination:</strong> From concept to execution.</li>
              <li><strong>Venue Styling:</strong> Enhancing spaces with artistic designs.</li>
              <li><strong>Personal Consultations:</strong> To ensure your vision comes to life.</li>
            </ul>
            <h2>Where We Operate</h2>
            <p>Serving the community with love, our services are available locally and beyond, ensuring your special day is as <strong>beautiful</strong> and <em>stress-free</em> as possible.</p>
          `,
            }}
          />
          <Button size="lg" mt={"md"} component="a" href="/contact">
            Contact us{" "}
          </Button>
        </TypographyStylesProvider>
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/630508d52c14741ab0db411b/58729342-d04e-4a0d-b207-e95d51fb2d0a/Glint_2022_Headshots-192.jpg"
          }
          h={PRIMARY_COL_HEIGHT}
          className={classes.image}
          visibleFrom="sm"
        />
      </SimpleGrid>
    </Container>
  );
};

export default Contact;

import { Box, Image, Overlay, Paper } from "@mantine/core";
import React from "react";
import Marquee from "react-fast-marquee";
const FeaturedList = () => {
  const imagesList = [
    {
      link: "https://images.squarespace-cdn.com/content/v1/6564afb4f0851760cfcdde58/068b4481-54ed-4afe-92d8-53d6e6e17e5f/Srinidhi-Rishi-Taj+Fishermans+Cove-0830.jpg",
    },
    {
      link: "https://weddingsecrets.in/wp-content/uploads/2023/09/c1109de0f58b4749cc5865e0422c5269-1.jpg",
    },
    {
      link: "https://i0.wp.com/www.weddingforward.com/wp-content/uploads/2021/04/luxury-wedding-decor-ideas-blush-wedding-arch-phuket_wedding_planner.jpg?fit=1080%2C1352&quality=70&ssl=1",
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE43_d-HoLD8TJNvh86mz7-V1KYjAsxSUDw&s",
    },
    {
      link: "https://i.pinimg.com/736x/7e/f9/58/7ef958c49493b8854b8ecd5658bba03b.jpg",
    },
    {
      link: "https://media.designcafe.com/wp-content/uploads/2022/04/07185047/start-your-easter-decorations-at-home-by-colour.jpg",
    },
    {
      link: "https://shineevents.co.in/wp-content/uploads/2022/08/WhatsApp-Image-2023-07-18-at-4.15.37-PM-1.jpeg",
    },
  ];
  return (
    <Paper p={0} mih={800} id="our-work">
      <Box pos={"relative"}>
        <Overlay
          backgroundOpacity={0.85}
          gradient="linear-gradient(0deg, #1a1b1e 5%, rgba(0, 0, 0, 0) 100%)"
          zIndex={10}
        >
          {/* <Stack h={"98%"} justify="flex-end" align="center" ta={"center"}>
            <Title>
              <Text inherit c={"green.6"}>
                Moments with Elegant Floral Creations
              </Text>{" "}
            </Title>
            <Button variant="light">
              Load more
            </Button>
          </Stack> */}
        </Overlay>
        <Marquee autoFill>
          {imagesList.map((item, index) => (
            <Paper w={400} h={300} key={index}>
              <Image src={item.link} />
            </Paper>
          ))}
        </Marquee>
        <Marquee direction="right" autoFill>
          {imagesList.reverse().map((item, index) => (
            <Paper w={400} h={300} key={index}>
              <Image src={item.link} />
            </Paper>
          ))}
        </Marquee>
        <Marquee autoFill>
          {imagesList.reverse().map((item, index) => (
            <Paper w={400} h={300} key={index}>
              <Image src={item.link} />
            </Paper>
          ))}
        </Marquee>
      </Box>
    </Paper>
  );
};

export default FeaturedList;

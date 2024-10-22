import { Box, Image, Overlay, Paper } from "@mantine/core";
import React from "react";
import Marquee from "react-fast-marquee";
const FeaturedList = () => {
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
          {Array(10)
            .fill(0)
            .map((item) => (
              <Paper w={400} h={300}>
                <Image src="https://www.billboard.com/wp-content/uploads/media/lana-del-rey-live-may-20-2017-billboard-1548.jpg" />
              </Paper>
            ))}
        </Marquee>
        <Marquee direction="right" autoFill>
          {Array(10)
            .fill(0)
            .map((item) => (
              <Paper w={400} h={300}>
                <Image src="https://www.mercurynews.com/wp-content/uploads/2019/10/ecct0420lana01.jpg?w=1024" />
              </Paper>
            ))}
        </Marquee>
        <Marquee autoFill>
          {Array(10)
            .fill(0)
            .map((item) => (
              <Paper w={400} h={300}>
                <Image src="https://www.azcentral.com/gcdn/-mm-/37d9c720aa8a5cd3587fb0a7cacdfd2656aabded/c=0-90-1600-992/local/-/media/Phoenix/Phoenix/2014/04/16//1397662708018-ldr-019.jpg?width=1600&height=902&fit=crop&format=pjpg&auto=webp" />
              </Paper>
            ))}
        </Marquee>
      </Box>
    </Paper>
  );
};

export default FeaturedList;

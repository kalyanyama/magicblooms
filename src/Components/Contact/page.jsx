import {
  Anchor,
  Button,
  Card,
  Container,
  Divider,
  Group,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  return (
    <Container mih={700} id="contact">
      <div> 
        <Stack maw={900}>
          <Title order={2} size="h1" fw={900}>
            Get in touch
          </Title>
          <Text>
            {" "}
            If you have any questions about our services, or if you're looking
            to get a project started, feel free to reach out. We’re always here
            to assist you with any maintenance, renovation, or contracting needs
            you may have.
          </Text>
          <Divider py="lg" maw={60} size={"lg"} />
        </Stack>
        <SimpleGrid>
          <Stack gap={"lg"}>
            {/* <div>
              <Text fw={800}>Office Address</Text>
              <Text mt={"xs"}>DAHAN ROAD, Ras Al Khaimah, UAE</Text>
            </div> */}
            <div>
              <Text fw={800}>Phone numbers</Text>
              <Group mt={"xs"}>
                <Anchor href="tel:+971564248606">+971 56 4248606</Anchor>
              </Group>
            </div>
            <div>
              <Text fw={800}>Email address</Text>
              <Group mt={"xs"}>
                <Anchor href="mailto:maintenance4rak@gmail.com">
                  hello@magicblooms.com
                </Anchor>
              </Group>
            </div>
          </Stack>
          <Stack >
            <TextInput
              label="Email address"
              name="email"
              placeholder="you@example.com"
              {...form.getInputProps("email")}
            />
            <NumberInput
              label="Phone number"
              name="phone"
              placeholder="123-456-7890"
              {...form.getInputProps("phone")}
            />
            <TextInput
              label="Subject"
              name="subject"
              placeholder="Inquiry about a project"
              {...form.getInputProps("subject")}
            />
            <Textarea
              label="Write Message"
              maxRows={10}
              minRows={6}
              autosize
              name="message"
              placeholder="Describe your project, any specific requirements, and how we can assist you. Looking forward to your message!"
              {...form.getInputProps("message")}
            />

            <Group justify="center" mt={"sm"}>
              <Button type="submit" size="md">
                Send message
              </Button>
            </Group>
          </Stack>
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Contact;

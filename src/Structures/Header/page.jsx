import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import { siteInformation } from "../../Content/Provider";
import classes from "./styles.module.css";

const linksData = [
  {
    label: "Home",
    link: "/#",
    dropdown: false,
  },
  {
    label: "Our work",
    link: "/#our-work",
    dropdown: false,
  },
  {
    label: "We handle",
    link: "/we-handle",
    dropdown: true,
    links: [
      {
        icon: IconCode,
        title: "Open source",
        description: "This Pokémon’s cry is very loud and distracting",
      },
      {
        icon: IconCoin,
        title: "Free for everyone",
        description: "The fluid of Smeargle’s tail secretions changes",
      },
      {
        icon: IconBook,
        title: "Documentation",
        description: "Yanma is capable of seeing 360 degrees without",
      },
      {
        icon: IconFingerprint,
        title: "Security",
        description: "The shell’s rounded shape and the grooves on its.",
      },
      {
        icon: IconChartPie3,
        title: "Analytics",
        description: "This Pokémon uses its flying ability to quickly chase",
      },
      {
        icon: IconNotification,
        title: "Notifications",
        description: "Combusken battles with the intensely hot flames it spews",
      },
    ],
  },

  {
    label: "About",
    link: "/#about",
    dropdown: false,
  },
];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const linksList = linksData.map((item, index) => {
    if (item.dropdown) {
      return (
        <HoverCard
          width={600}
          position="bottom"
          radius="md"
          shadow="md"
          withinPortal
          key={index}
        >
          <HoverCard.Target>
            <a href="#" className={classes.link}>
              <Center inline>
                <Box component="span" mr={5}>
                  {item.label}
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </a>
          </HoverCard.Target>

          <HoverCard.Dropdown style={{ overflow: "hidden" }}>
            <Group justify="space-between" px="md">
              <Text fw={500}>{item.label}</Text>
              <Anchor href="#" fz="xs">
                View all
              </Anchor>
            </Group>

            <Divider my="sm" />

            <SimpleGrid cols={2} spacing={0}>
              {item.links.map((innerItem, innerIndex) => (
                <UnstyledButton className={classes.subLink} key={innerIndex}>
                  <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon size={34} variant="default" radius="md">
                      <innerItem.icon
                        style={{ width: rem(22), height: rem(22) }}
                        color={theme.colors.blue[6]}
                      />
                    </ThemeIcon>
                    <div>
                      <Text size="sm" fw={500}>
                        {innerItem.title}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {innerItem.description}
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
              ))}
            </SimpleGrid>

            <div className={classes.dropdownFooter}>
              <Group justify="space-between">
                <div>
                  <Text fw={500} fz="sm">
                    Get started
                  </Text>
                  <Text size="xs" c="dimmed">
                    Their food sources have decreased, and their numbers
                  </Text>
                </div>
                <Button variant="default">Get started</Button>
              </Group>
            </div>
          </HoverCard.Dropdown>
        </HoverCard>
      );
    } else {
      return (
        <a href={item.link} className={classes.link}>
          {item.label}
        </a>
      );
    }
  });

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Group justify="space-between" h="100%" w={"100%"}>
          <Text tt={"capitalize"} fz={"lg"} fw={800}>
            {siteInformation.name}
          </Text>
          <Group h="100%" gap={0} visibleFrom="sm">
            {linksList}
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" component="a" href="/contact">Book a call</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={100000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{linksList}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </header>
  );
};

export default Header;

import {
  Anchor,
  Button,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  createTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "Poppins,  sans-serif",
  // headings: { fontFamily: "Gloock, serif" },
  defaultGradient: {
    from: "orange",
    to: "red",
    deg: 45,
  },
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "lg",
        display: "flex",
        component: Center,
      },
    }),
    Center: Center.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
      },
    }),
    Grid: Grid.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
      },
    }),
    SimpleGrid: SimpleGrid.extend({
      defaultProps: {
        cols: { base: 1, sm: 2 },
        h: "100%",
        w: "100%",
        spacing: "xl",
      },
    }),
    Image: Image.extend({
      defaultProps: {
        fit: "cover",
        radius: "md",
        h: "100%",
        w: "100%",
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        underline: "never",
        componant: Link,
        c: "",
      },
    }),
    GridCol: Grid.Col.extend({
      defaultProps: {
        span: { base: 12, sm: 6 },
        h: "100%",
        w: "100%",
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "xs",
        bg: "transparent",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        size: "xs",
        variant: "outline",
      },
    }),
  },
});

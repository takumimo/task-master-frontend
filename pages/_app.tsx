import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },

          body: {
            ...theme.fn.fontStyles(),
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },

          ".your-class": {
            backgroundColor: "red",
          },

          "#your-id > [data-active]": {
            backgroundColor: "pink",
          },
        }),
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;

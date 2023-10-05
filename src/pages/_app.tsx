import type { AppProps } from "next/app";
import { Theme } from "@radix-ui/themes";
import { Layout } from "@/components";
import "@radix-ui/themes/styles.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme appearance="dark" accentColor="orange" grayColor="sand" radius="large">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

import { Section, Flex, Box, Text, Heading, Link } from "@radix-ui/themes";
import { TwitterLogoIcon, GitHubLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import s from "./header.module.css";

export const Header = () => {
  return (
    <Box height={{ sm: "8", md: "9" }} position="sticky" className={s["header-section"]}>
      <Flex direction="row" justify="between" height="100%" align="center" px="4">
        <Box>
          <Heading as="h1">BreeTheDev</Heading>
        </Box>
        {/* social media links for GitHub, Twitter, and Discord */}
        <Box>
          <Flex direction="row" align="center" gap="4">
            <Box>
              <Link href="#">
                <GitHubLogoIcon height="24px" width="24px" />
              </Link>
            </Box>
            <Box>
              <Link href="#">
                <TwitterLogoIcon height="24px" width="24px" />
              </Link>
            </Box>
            <Box>
              <Link href="#">
                <DiscordLogoIcon height="24px" width="24px" />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

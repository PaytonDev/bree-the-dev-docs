import React, { useState } from "react";
import { Header } from "..";
import { Flex, Box, Text, Link } from "@radix-ui/themes";
import s from "./layout.module.css";
import { useRouter } from "next/router";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();

  const links = [
    {
      label: "Introduction",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about-me",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact Me",
      href: "/contact-me",
    },
    {
      label: "Recipes",
      href: "/recipes",
    },
  ];

  return (
    <>
      <Header />
      <Flex direction="row" gap="4">
        <Box className={s["sidebar-section"]}>
          <Flex direction="column" align="start" gap="4">
            {links.map((link, index) => (
              <Link
                key={index}
                className={pathname === link.href ? s["sidebar-link-active"] : s["sidebar-link"]}
                href={link.href}
              >
                <Text weight="bold">{link.label}</Text>
              </Link>
            ))}
          </Flex>
        </Box>
        <main>{children}</main>
      </Flex>
    </>
  );
};

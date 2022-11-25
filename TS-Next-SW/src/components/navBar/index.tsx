import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Flex
      w="100vw"
      align="center"
      fontSize={16}
      justify="center"
      gap={10}
      p={3}
      bgColor="#E6DDCB"
      color="black"
    >
      <NextLink href="/delete" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Remove Items
        </Link>
      </NextLink>
      <NextLink href="/new-post" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          New Post
        </Link>
      </NextLink>
      <NextLink href="/search" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Search Topic
        </Link>
      </NextLink>
    </Flex>
  );
}

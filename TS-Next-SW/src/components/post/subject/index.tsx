import { Text, Flex } from "@chakra-ui/react";

export default function Subject({ subject }: { subject: string }) {
  return (
    <Flex w="100%" justify="center" bgColor="#272D33">
      <Text fontWeight="bold" color="white" textAlign="center" p={2}>
        - {subject} -
      </Text>
    </Flex>
  );
}

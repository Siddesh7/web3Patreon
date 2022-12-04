import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import CreatePost from "../components/createPost";

export default function ChannelFeed() {
  return (
    <div>
      <div className="w-[70%] m-auto my-[20px]">
        <Card>
          <CardHeader pb={"0"}>
            <Heading size="md">This is a content</Heading>
            <Text
              mt={"5px"}
              width={"fit-content"}
              px="4px"
              borderRadius={"8px"}
              bgColor={"yellow.200"}
            >
              Premium
            </Text>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text py="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>{" "}
      <div className="w-[70%] m-auto my-[20px]">
        <Card>
          <CardHeader pb={"0"}>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text py="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      <div className="w-[70%] m-auto my-[20px]">
        <Card>
          <CardHeader pb={"0"}>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text py="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={"300px"}
                  objectFit={"cover"}
                />
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

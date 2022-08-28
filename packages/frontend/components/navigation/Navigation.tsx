import { Navbar, Text, Image, Button, Spacer } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navigation() {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Image src="/logo.svg" alt="Vercel Logo" width={40} height={40} />
        <Spacer x={0.5} />
        <Text b color="inherit" hideIn="xs">
          Nation3 Guaridans
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Button auto shadow>
          New Ruling
        </Button>
        <ConnectButton />
      </Navbar.Content>
    </Navbar>
  );
}

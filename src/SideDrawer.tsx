import { VscThreeBars } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SidebarContent } from "./Sidebar";

const SideDrawer = () => {
  return (
    <DrawerRoot placement="end" bg="white">
      <DrawerBackdrop bg="rgba(255, 255, 255, 0.8)" />
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          bg="white"
          color="black"
          position="relative"
        >
          <VscThreeBars size="24px" />
        </Button>
      </DrawerTrigger>
      <DrawerContent bg="white" color="black">
        <DrawerBody bg="white" mt={5}>
          <SidebarContent />
        </DrawerBody>
        <DrawerFooter bg="white">
          <DrawerActionTrigger asChild>
            <Button variant="outline" bg="white" color="black">
              Close
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SideDrawer;

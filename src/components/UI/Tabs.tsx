import React from "react";
import { Tabs as HeroUITabs, Tab, Card, CardBody } from "@heroui/react";

interface Props {
  selected: string | number | null;
  handleTabChange: (key: string | number | null) => void;
  tabs: {
    id: string;
    label: string;
    content: string | React.ReactNode;
  }[];
}

const Tabs = ({ selected = "all", handleTabChange, tabs }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <HeroUITabs
        aria-label="tabs"
        items={tabs}
        selectedKey={selected}
        onSelectionChange={(e) => handleTabChange(e)}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </HeroUITabs>
    </div>
  );
};

export default Tabs;

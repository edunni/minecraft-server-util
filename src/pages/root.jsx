import {
  Header,
  HeaderContainer,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderName,
  Content,
  Theme,
  HeaderPanel,
  HeaderGlobalAction,
  HeaderGlobalBar,
  Select,
  SelectItem
} from "@carbon/react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ColorPalette } from "@carbon/react/icons";

export default function Root() {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const [theme, setTheme] = useState("g100");

  return (
    <Theme theme={theme}>
      <HeaderContainer
        render={() => (
          <>
            <Header>
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="/damn">Overview</HeaderMenuItem>
                <HeaderMenuItem href="#">Catalog</HeaderMenuItem>
                <HeaderMenuItem href="#">Manage</HeaderMenuItem>
                <HeaderMenuItem href="#">Monitor</HeaderMenuItem>
                <HeaderMenuItem href="#">Administer</HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction
                  aria-label="Theme switcher"
                  isActive={isSwitcherOpen}
                  onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
                >
                  <ColorPalette />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <HeaderPanel expanded={isSwitcherOpen} aria-label="Color switcher panel">
                <Select labelText="Theme" onChange={(event) => {
                    console.log(event.target.value);
                    setTheme(event.target.value);
                }} >
                    <SelectItem value="g100" text="Gray 100" />
                    <SelectItem value="g90" text="Gray 90" />
                    <SelectItem value="g10" text="Gray 10" />
                    <SelectItem value="white" text="White" />
                </Select>
              </HeaderPanel>
            </Header>
            <Content>
              <Outlet />
            </Content>
          </>
        )}
      />
    </Theme>
  );
}

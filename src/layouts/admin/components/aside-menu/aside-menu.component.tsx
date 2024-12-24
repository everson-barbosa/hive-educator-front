import { ComponentProps } from "react"

import { NavFeatures } from "./components/nav-features/nav-features.component"
import { NavUser } from "./components/nav-user/nav-user.component"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar/sidebar.component"
import { features } from "./utils/features/features.utils"


export function AsideMenu({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h2>H</h2>
      </SidebarHeader>
      
      <SidebarContent>
        <NavFeatures features={features} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible.component"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar/sidebar.component"
import { Link } from "react-router-dom"

interface SubFeature {
  readonly title: string
  readonly url: string
}

interface Feature {
  readonly title: string
  readonly url: string
  readonly icon?: LucideIcon
  readonly isActive?: boolean
  readonly subFeatures: SubFeature[]
}

interface NavMainProps {
  readonly features: Feature[]
}

export function NavFeatures({
  features,
}: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {features.map((feature) => (
          <Collapsible
            key={feature.title}
            asChild
            defaultOpen={feature.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={feature.title}>
                  {feature.icon && <feature.icon />}
                  <span>{feature.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {feature.subFeatures?.map((subFeature) => (
                    <SidebarMenuSubItem key={subFeature.title} onClick={(props) => console.log(props)}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subFeature.url}>
                          <span>{subFeature.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

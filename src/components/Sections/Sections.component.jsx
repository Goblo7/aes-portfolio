import {
  HeroSection,
  AboutSection,
  PortofiloSection,
  ContactSection,
} from "../../scripts/section.script";
import SectionContainer from "./SectionsContainer/SectionContainer.component";
import { sectionWidthHeight } from "../../styles/layout.styles";
import sectionIdEnum from "../../scripts/section-id.script";

const sections = [
  {
    sectionId: sectionIdEnum.hero,
    width: sectionWidthHeight[0].hero,
    height: sectionWidthHeight[1].hero,
    overFlow: sectionWidthHeight[2].hero,
    component: <HeroSection />,
  },
  {
    sectionId: sectionIdEnum.about,
    width: sectionWidthHeight[0].about,
    height: sectionWidthHeight[1].about,
    overFlow: sectionWidthHeight[2].about,
    component: <AboutSection />,
  },
  {
    sectionId: sectionIdEnum.portofilo,
    width: sectionWidthHeight[0].portofilo,
    height: sectionWidthHeight[1].portofilo,
    overFlow: sectionWidthHeight[2].portofilo,
    component: <PortofiloSection />,
  },
  {
    sectionId: sectionIdEnum.contacts,
    width: sectionWidthHeight[0].contacts,
    height: sectionWidthHeight[1].contacts,
    overFlow: sectionWidthHeight[2].contacts,
    component: <ContactSection />,
  },
];

const section = sections.map((element) => {
  return (
    <SectionContainer
      width={element.width}
      height={element.height}
      sectionId={element.sectionId}
      overFlow={element.overFlow}
      key={element.sectionId}
    >
      {element.component}
    </SectionContainer>
  );
});

export default function Sections() {
  return <main>{section}</main>;
}

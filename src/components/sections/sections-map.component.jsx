import {
  HeroSection,
  AboutSection,
  PortofiloSection,
  ContactSection,
} from "./section/section.component";
import SectionContainer from "./sections-container/sections-container.component";
import SectionWidthHeight from "../../data/section-width-height.data";
import SectionIdEnum from "../../data/section-id.data";

const sections = [
  {
    sectionId: SectionIdEnum.hero,
    width: SectionWidthHeight[0].hero,
    height: SectionWidthHeight[1].hero,
    overFlow: SectionWidthHeight[2].hero,
    component: <HeroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    width: SectionWidthHeight[0].about,
    height: SectionWidthHeight[1].about,
    overFlow: SectionWidthHeight[2].about,
    component: <AboutSection />,
  },
  {
    sectionId: SectionIdEnum.portofilo,
    width: SectionWidthHeight[0].portofilo,
    height: SectionWidthHeight[1].portofilo,
    overFlow: SectionWidthHeight[2].portofilo,
    component: <PortofiloSection />,
  },
  {
    sectionId: SectionIdEnum.contacts,
    width: SectionWidthHeight[0].contacts,
    height: SectionWidthHeight[1].contacts,
    overFlow: SectionWidthHeight[2].contacts,
    component: <ContactSection />,
  },
];

const section = sections.map(
  (element) => {
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
  }
);

export default function Sections() {
  return <main>{section}</main>;
}

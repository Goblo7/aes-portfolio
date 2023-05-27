import {
  HeroSection,
  AboutSection,
  PortofiloSection,
  ContactSection,
} from "./section/section.component";
import SectionContainer from "./section-container/section-container.component";
import SectionWidthHeight from "../../scripts/section-width-height.scripts";
import SectionIdEnum from "../../scripts/section-id";

const sections = [
  {
    sectionId: SectionIdEnum.hero,
    width: SectionWidthHeight[0].hero,
    height: SectionWidthHeight[1].hero,
    component: <HeroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    width: SectionWidthHeight[0].about,
    height: SectionWidthHeight[1].about,
    component: <AboutSection />,
  },
  {
    sectionId: SectionIdEnum.portofilo,
    width: SectionWidthHeight[0].portofilo,
    height: SectionWidthHeight[1].portofilo,
    component: <PortofiloSection />,
  },
  {
    sectionId: SectionIdEnum.contacts,
    width: SectionWidthHeight[0].contacts,
    height: SectionWidthHeight[1].contacts,
    component: <ContactSection />,
  },
];

const section = sections.map(({ component, sectionId, width, height }) => {
  return (
    <SectionContainer
      width={width}
      height={height}
      sectionId={sectionId}
      key={sectionId}
    >
      {component}
    </SectionContainer>
  );
});

export default function Sections() {
  return <main className="MuiMain-root">{section}</main>;
}

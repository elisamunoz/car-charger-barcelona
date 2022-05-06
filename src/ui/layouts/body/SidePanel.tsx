import Panel from "../../components/panel";
import Filter from "../../components/filterPanel";
// import CameraPanel from '../../components/cameraPanel';
// import styles from './Body.module.scss';

const FilterItem = ({ mainTitle, title, subtitle }: any) => (
  <Panel.Item>
    <Filter mainTitle={mainTitle} title={title} subtitle={subtitle} />
  </Panel.Item>
);

const PanelSideBar = () => (
  <Panel>
    <FilterItem
      mainTitle="BAMSA Rambla de Catalunya - Endesa"
      title="BAMSA - Rambla de Catalunya, Barcelona, Spain"
      subtitle="Charging points"
    />
    {/* <CameraPanel
      location="CG1 / PK 9+791 (La Portalada) / 860 metres(Km 9)"
      municipi="Andorra"
      font="Centre Nacional de Trànsit d'Andorra"
      image="https://www.meme-arsenal.com/memes/c2c147dcd0a91c561966c8342dd7586a.jpg"
    /> */}
  </Panel>
);

export default PanelSideBar;

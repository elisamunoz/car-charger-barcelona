import MainPanel from '../../components/mainPanel';
import Filter from '../../components/filterPanel';
// import InfoPanel from '../../components/infoPanel';
import styles from './Body.module.scss';

const FilterItem = ({ mainTitle, title, subtitle}: any) => (
  <MainPanel.Item>
    <Filter
      mainTitle={mainTitle}
      title={title}
      subtitle={subtitle}
    />
  </MainPanel.Item>
)

const Panel = () => (
  <MainPanel>
    <FilterItem
      mainTitle='BAMSA Rambla de Catalunya - Endesa'
      title='BAMSA - Rambla de Catalunya, Barcelona, Spain'
      subtitle='Charging points'
    />
    <FilterItem
      title='BAMSA - Rambla de Catalunya, Barcelona, Spain'
    />
    <FilterItem
      mainTitle='BAMSA Rambla de Catalunya - Endesa'
      title='BAMSA - Rambla de Catalunya, Barcelona, Spain'
      subtitle='Charging points'
    />
    {/* <InfoPanel
      location="CG1 / PK 9+791 (La Portalada) / 860 metres(Km 9)"
      municipi="Andorra"
      font="Centre Nacional de Trànsit d'Andorra"
      image="https://www.meme-arsenal.com/memes/c2c147dcd0a91c561966c8342dd7586a.jpg"
    /> */}
  </MainPanel>
);

export default Panel;

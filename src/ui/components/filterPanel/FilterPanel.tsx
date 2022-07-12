import { useSelector, useDispatch } from 'react-redux'
import {
  toggleCameras,
  togglePanels,
  toggleConstructionWorks,
  toggleRetentions,
} from 'redux/reducers/filtersSlice'
import {
  getCamerasFilter,
  getPanelsFilter,
  getConstructionWorksFilter,
  getRetentionsFilter,
} from 'redux/selectors/filters.selectors'

import FilterItem from '../filterItem'
import styles from './FilterPanel.module.scss'

interface Props {
  mainTitle?: string
  title?: string
  subtitle?: string
}

const FilterPanel = ({ mainTitle, title, subtitle }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.filterPanel}>
      {mainTitle && <h2 className={styles.mainTitle}>{mainTitle}</h2>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}

      <FilterItem
        text='Càmeres'
        value={useSelector(getCamerasFilter)}
        onChange={() => dispatch(toggleCameras())}
      />
      <FilterItem
        text='Panells'
        value={useSelector(getPanelsFilter)}
        onChange={() => dispatch(togglePanels())}
      />
      <FilterItem
        text='Obres'
        value={useSelector(getConstructionWorksFilter)}
        onChange={() => dispatch(toggleConstructionWorks())}
        />
      <FilterItem
        text='Retencions'
        value={useSelector(getRetentionsFilter)}
        onChange={() => dispatch(toggleRetentions())}
      />
    </div>
  )
}

export default FilterPanel

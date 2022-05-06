import { useState } from "react";
import ToggleSwitch from "../toggleSwitch";
import Icon from "../icon";
import styles from "./FilterItem.module.scss";

interface Props {
  text: string;
}

const FilterItem = ({ text }: Props) => {
  const [filterOn, setFilterOn] = useState(false);
  const toggleFilter = () => {
    setFilterOn(!filterOn);
  };

  return (
    <div className={styles.filterItem}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.toggleIcon}>
        <ToggleSwitch isActive={filterOn} onClick={toggleFilter} />
        {/* <ToggleSwitch disabled /> */}
      </div>
    </div>
  );
};

export default FilterItem;

import { useState } from "react";
import { FaMouse } from "react-icons/fa";
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
        <Icon icon={FaMouse} size={25} />
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

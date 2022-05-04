import styles from './ToggleSwitch.module.scss';
import classNames from 'classnames/bind';

interface Props {
  isActive?: boolean,
  disabled?: boolean,
  onClick?: Function,
}

let cx = classNames.bind(styles); 

const ToggleSwitch = ({
  isActive = false,
  disabled = false,
  onClick,
}: Props) => (
  <button
    disabled={disabled}
    className={cx({
      toggleSwitch: true,
      toggleSwitchiIsActive: isActive,
    })}
  >
    <div className={styles.knob}></div>
  </button>
);

export default ToggleSwitch;
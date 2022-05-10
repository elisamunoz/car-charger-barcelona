import styles from "./ToggleSwitch.module.scss";
import classNames from "classnames/bind";

interface Props {
  isActive?: boolean;
  disabled?: boolean;
  onClick: any;
}

const cx = classNames.bind(styles);

const ToggleSwitch = ({
  isActive = false,
  disabled = false,
  onClick,
}: Props) => {
  const handleOnClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleOnClick}
      disabled={disabled}
      className={cx({
        toggleSwitch: true,
        toggleSwitchiIsActive: isActive,
        toggleSwitchDisabled: disabled,
      })}
    >
      <div className={styles.knob}></div>
    </button>
  );
};

export default ToggleSwitch;

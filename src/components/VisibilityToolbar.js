import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { VISIBILITY_TYPES } from "../constants/toolbarconst";
import PropTypes from "prop-types";

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;
function getButtonVariant(visibilityType1, currentVisibilityType) {
  return visibilityType1 === currentVisibilityType ? "dark" : "outline-dark";
}

export default function VisibilityToolbar({
  visibilityType1,
  onVisibilityChange1,
}) {
  return (
    <ToggleButtonGroup
      type="radio"
      name="visibility"
      onChange={onVisibilityChange1}
      className="mt-3"
      defaultValue={ALL}
    >
      <ToggleButton
        id="tbg-btn-1"
        value={ALL}
        variant={getButtonVariant(visibilityType1, ALL)}
      >
        All
      </ToggleButton>
      <ToggleButton
        id="tbg-btn-2"
        value={ACTIVE}
        variant={getButtonVariant(visibilityType1, ACTIVE)}
      >
        Active
      </ToggleButton>
      <ToggleButton
        id="tbg-btn-3"
        value={COMPLETED}
        variant={getButtonVariant(visibilityType1, COMPLETED)}
      >
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

VisibilityToolbar.propTypes = {
  visibilityType1: PropTypes.string,
  onVisibilityChange1: PropTypes.func,
};

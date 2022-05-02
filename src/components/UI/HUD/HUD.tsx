import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import classNames from "classnames";
import { useControlsStore } from "store/controls.store";
import "./HUD.scss";

export default function HUD() {
  const [selectedTool, setSelectedTool] = useControlsStore((controls) => [
    controls.selectedTool,
    controls.setSelectedTool,
  ]);

  return (
    <div className="hud">
      <div className="hud__tool">
        <Tooltip title="Translate" placement="bottom">
          <FontAwesomeIcon
            icon="up-down-left-right"
            onClick={() => setSelectedTool("translate")}
            className={classNames("hud__tool__item", { "hud__tool__item--selected": selectedTool === "translate" })}
          />
        </Tooltip>
        <Tooltip title="Rotate" placement="bottom">
          <FontAwesomeIcon
            icon="rotate"
            onClick={() => setSelectedTool("rotate")}
            className={classNames("hud__tool__item", { "hud__tool__item--selected": selectedTool === "rotate" })}
          />
        </Tooltip>
        <Tooltip title="Scale" placement="bottom">
          <FontAwesomeIcon
            icon="maximize"
            onClick={() => setSelectedTool("scale")}
            className={classNames("hud__tool__item", { "hud__tool__item--selected": selectedTool === "scale" })}
          />
        </Tooltip>
      </div>
    </div>
  );
}

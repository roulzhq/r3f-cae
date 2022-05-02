import classNames from "classnames";
import { usePartStore } from "store/partStore";
import { useSceneStore } from "store/scene.store";

import "./SceneExplorer.scss";

export default function SceneExplorer() {
  const [parts] = useSceneStore((store) => [store.parts]);
  const [selectedPart, setSelectedPart, setHoveringPart] = usePartStore((store) => [
    store.selectedPart,
    store.setSelectedPart,
    store.setHoveringPart,
  ]);

  return (
    <div className="scene-explorer">
      <h2>scene</h2>
      <ul className="parts-list">
        {Object.values(parts).map((part) => (
          <li
            key={part.id}
            onMouseOver={() => setHoveringPart(part.id)}
            onClick={() => setSelectedPart(part.id)}
            className={classNames("parts-list__item", {
              "parts-list__item--selected": part.id === selectedPart,
            })}
          >
            {part.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

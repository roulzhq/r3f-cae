import { InputNumber } from "antd";
import { Vector3 } from "types";

import "./VectorInput.scss";

export interface VectorInputProps {
  value: Vector3;
  onChange: (value: Vector3) => void;
}

export default function VectorInput({ value, onChange }: VectorInputProps) {
  return (
    <div className="vector-input">
      <InputNumber addonAfter="x" value={value[0]} onChange={(v) => onChange([v, value[1], value[2]])} />
      <InputNumber addonAfter="y" value={value[1]} onChange={(v) => onChange([value[0], v, value[2]])} />
      <InputNumber addonAfter="z" value={value[2]} onChange={(v) => onChange([value[0], value[1], v])} />
    </div>
  );
}

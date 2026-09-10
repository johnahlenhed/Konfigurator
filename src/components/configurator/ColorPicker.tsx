import { useConfiguratorStore } from '../../store/configuratorStore';
import { baseColors } from '../../store/configOption';

export function ColorPicker() {
  const baseColor = useConfiguratorStore(
    (state) => state.selection.baseColor
  );

  const setBaseColor = useConfiguratorStore(
    (state) => state.setBaseColor
  );

  return (
    <div>
      {baseColors.map((color) => (
        <button
          key={color.id}
          type="button"
          onClick={() => setBaseColor(color.id)}
          aria-pressed={baseColor === color.id}
        >
          {color.label}
        </button>
      ))}
    </div>
  );
}
import { useConfiguratorStore } from '../../store/configuratorStore';

export function PartSelector() {
  const baseLevel = useConfiguratorStore(
    (state) => state.selection.baseLevel
  );

  const setBaseLevel = useConfiguratorStore(
    (state) => state.setBaseLevel
  );

  return (
    <button
      type="button"
      onClick={() => setBaseLevel('base')}
      aria-pressed={baseLevel === 'base'}
    >
      Base
    </button>
  );
}
import { describe, expect, it } from 'vitest';
import { useConfiguratorStore } from './configuratorStore';

describe('configuratorStore', () => {
  it('keeps the selected model and color when an addon type is swapped', () => {
    const state = useConfiguratorStore.getState();

    state.setBaseLevel('producer');
    state.setAddonModel(0, 'model-2');
    state.setAddonColor(0, 'cod-white');
    state.setAddonType(0, 'mixer');

    expect(useConfiguratorStore.getState().selection.addons[0]).toMatchObject({
      type: 'mixer',
      addonModel: 'model-2',
      color: 'cod-white',
    });
  });

  it('defaults to the first model and Pike Green when a new slot is created', () => {
    const state = useConfiguratorStore.getState();

    state.setBaseLevel('beginner');
    state.setAddonType(0, 'speaker');

    expect(useConfiguratorStore.getState().selection.addons[0]).toMatchObject({
      type: 'speaker',
      addonModel: 'model-1',
      color: 'pike-green',
    });
  });
});

import { MeshStandardMaterial, Object3D } from 'three'
import { traverseMeshes, getMaterials } from '../../utils/modelHelpers'
import type { MaterialSlotKey } from './materialConfig'
import { materialSlots } from './materialConfig'

export function setSlotColor(root: Object3D, slot: MaterialSlotKey, hex: string) {
    const targetName = materialSlots[slot]

    traverseMeshes(root, (mesh) => {
        getMaterials(mesh).forEach((material) => {
            if (material.name === targetName && material instanceof MeshStandardMaterial) {
                material.color.set(hex)
            }
        })
    })
}
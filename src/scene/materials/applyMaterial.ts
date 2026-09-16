import { MeshStandardMaterial, Object3D, Texture } from 'three'
import { traverseMeshes, getMaterials } from '../../utils/modelHelpers'
import type { ColorScheme } from './colorScheme'

export function setSlotColor(root: Object3D, materialName: string, hex: string) {

    traverseMeshes(root, (mesh) => {
        getMaterials(mesh).forEach((material) => {
            if (material.name === materialName && material instanceof MeshStandardMaterial) {
                material.color.set(hex)
            }
        })
    })
}

export function setSlotTexture(root: Object3D, materialName: string, texture: Texture) {

    traverseMeshes(root, (mesh) => {
        getMaterials(mesh).forEach((material) => {
            if (material.name === materialName && material instanceof MeshStandardMaterial) {
                material.map = texture
                material.needsUpdate = true
            }
        })
    })
}

export function applyColorScheme<T extends string>(
    root: Object3D,
    scheme: ColorScheme<T>,
    getMaterialName: (slot: T) => string
) {
    scheme.slots.forEach((slot) => {
        setSlotColor(root, getMaterialName(slot), scheme.color)
    })
}
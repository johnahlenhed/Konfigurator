import { MeshStandardMaterial, Object3D, Texture } from 'three'
import { traverseMeshes, getMaterials } from '../../utils/modelHelpers'
import type { MaterialSlotKey } from './materialConfig'
import { getMaterialName } from './materialSlots'
import type { ColorScheme } from './colorSchemes'

export function setSlotColor(root: Object3D, slot: MaterialSlotKey, hex: string) {
    const targetName = getMaterialName(slot)

    traverseMeshes(root, (mesh) => {
        getMaterials(mesh).forEach((material) => {
            if (material.name === targetName && material instanceof MeshStandardMaterial) {
                material.color.set(hex)
            }
        })
    })
}

export function setSlotTexture(root: Object3D, slot: MaterialSlotKey, texture: Texture) {
    const targetName = getMaterialName(slot)

    traverseMeshes(root, (mesh) => {
        getMaterials(mesh).forEach((material) => {
            if (material.name === targetName && material instanceof MeshStandardMaterial) {
                material.map = texture
                material.needsUpdate = true
            }
        })
    })
}

export function applyColorScheme(root: Object3D, colorScheme: ColorScheme) {
    Object.entries(colorScheme.slots).forEach(([slot, hex]) => {
        if (hex) {
            setSlotColor(root, slot as MaterialSlotKey, hex)
        }
    })
}


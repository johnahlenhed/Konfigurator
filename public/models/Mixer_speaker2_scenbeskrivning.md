# Blender/GLB – scenbeskrivning

**Fil:** `Mixer_speaker2.glb`  
**Format:** glTF Binary (GLB)  
**GLB-version:** 2

## 1. Översikt

- **Scener:** 1
- **Aktiv scen:** Scene
- **Noder/objekt:** 21
- **Meshes:** 21
- **Material:** 8
- **Texturer:** 0
- **Bildresurser:** 0
- **Animationer:** 21

## 2. Scenens struktur

Den aktiva scenen består av följande root-objekt. Under dessa ligger objekt som children enligt GLTF-hierarkin.

```text
├─ baseSpeaker2 | mesh=KO_speaker2_KO_Bottom_Attachment
├─ baseSpeaker2auxinput | mesh=KO_speaker2_KO_aux_input
├─ baseSpeaker2output | mesh=KO_speaker2_KO_output
├─ baseSpeaker2panel | mesh=KO_speaker2_KO_main_body (1) (1)
├─ baseSpeaker2round | mesh=KO_speaker2_KO_Body52
├─ baseSpeaker2round2 | mesh=KO_speaker2_KO_Body67
├─ baseSpeaker2speakerpanel | mesh=KO_speaker2_KO_metal_base
├─ baseSpeaker2usb | mesh=KO_speaker2_KO_USB
├─ btnSpeaker2main | mesh=Cube.006
├─ btnSpeaker2sound | mesh=Cube.001
├─ btnSpeaker2start | mesh=Cylinder.011
├─ btnSpeaker2volume | mesh=Cube.002
├─ faderSpeaker2bottom | mesh=Cylinder.032
├─ faderSpeaker2top | mesh=Cylinder.035
├─ textSpeaker2aux | mesh=Text.003
├─ textSpeaker2input | mesh=Text.004
├─ textSpeaker2main | mesh=Text.001
├─ textSpeaker2output | mesh=Text.002
├─ textSpeaker2sound | mesh=Text
├─ textSpeaker2usb | mesh=Text.005
└─ textSpeaker2volume | mesh=Text.006
```

## 3. Viktiga objekt

| Objekt | Mesh | Geometrisk information | Children |
|---|---|---|---:|
| `baseSpeaker2` | `KO_speaker2_KO_Bottom_Attachment` | 17479 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2auxinput` | `KO_speaker2_KO_aux_input` | 3880 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2output` | `KO_speaker2_KO_output` | 2830 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2panel` | `KO_speaker2_KO_main_body (1) (1)` | 25543 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2round` | `KO_speaker2_KO_Body52` | 29686 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2round2` | `KO_speaker2_KO_Body67` | 29682 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2speakerpanel` | `KO_speaker2_KO_metal_base` | 15320 POSITION vertices across 1 primitive(s) | 0 |
| `baseSpeaker2usb` | `KO_speaker2_KO_USB` | 2840 POSITION vertices across 1 primitive(s) | 0 |
| `btnSpeaker2main` | `Cube.006` | 612 POSITION vertices across 1 primitive(s) | 0 |
| `btnSpeaker2sound` | `Cube.001` | 612 POSITION vertices across 1 primitive(s) | 0 |
| `btnSpeaker2start` | `Cylinder.011` | 195 POSITION vertices across 1 primitive(s) | 0 |
| `btnSpeaker2volume` | `Cube.002` | 608 POSITION vertices across 1 primitive(s) | 0 |
| `faderSpeaker2bottom` | `Cylinder.032` | 130 POSITION vertices across 1 primitive(s) | 0 |
| `faderSpeaker2top` | `Cylinder.035` | 195 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2aux` | `Text.003` | 196 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2input` | `Text.004` | 351 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2main` | `Text.001` | 38 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2output` | `Text.002` | 863 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2sound` | `Text` | 1096 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2usb` | `Text.005` | 922 POSITION vertices across 1 primitive(s) | 0 |
| `textSpeaker2volume` | `Text.006` | 595 POSITION vertices across 1 primitive(s) | 0 |

> **Tips för webbutveckling:** använd objektnamnen ovan som stabila identifierare när specifika delar ska hittas eller styras i webbläsaren. Undvik att byta namn på interaktiva objekt efter export om webbkoden refererar direkt till namnen.

## 4. Objektens hierarki

Hierarkin är viktig eftersom transformeringar på ett parent-objekt kan påverka dess children. För interaktiva delar bör webbutvecklaren därför kontrollera både objektets eget namn och dess parent/child-relation.

## 5. Material och texturer

| # | Material | Alpha | Texturkopplingar |
|---:|---|---|---|
| 0 | `addPaint2` | `OPAQUE` | — |
| 1 | `addPlasticblack` | `OPAQUE` | — |
| 2 | `addClementine` | `OPAQUE` | — |
| 3 | `addmetal4` | `OPAQUE` | — |
| 4 | `addLightgreen4` | `OPAQUE` | — |
| 5 | `addMetalorange` | `OPAQUE` | — |
| 6 | `addWhite2` | `OPAQUE` | — |
| 7 | `plasticBlack` | `OPAQUE` | — |

### Texturer/bilder

Inga texturer hittades.

## 6. Animationer

| # | Animation | Channels | Berörda objekt | Längd* |
|---:|---|---:|---|---:|
| 0 | `baseSpeaker2Action` | 1 | `baseSpeaker2 (translation)` | 2.500 s |
| 1 | `baseSpeaker2auxinputAction` | 1 | `baseSpeaker2auxinput (translation)` | 2.500 s |
| 2 | `baseSpeaker2outputAction` | 1 | `baseSpeaker2output (translation)` | 2.500 s |
| 3 | `baseSpeaker2panelAction` | 1 | `baseSpeaker2panel (translation)` | 2.500 s |
| 4 | `baseSpeaker2roundAction` | 1 | `baseSpeaker2round (translation)` | 2.500 s |
| 5 | `baseSpeaker2round2Action` | 1 | `baseSpeaker2round2 (translation)` | 2.500 s |
| 6 | `baseSpeaker2speakerpanelAction` | 1 | `baseSpeaker2speakerpanel (translation)` | 2.500 s |
| 7 | `baseSpeaker2usbAction` | 1 | `baseSpeaker2usb (translation)` | 2.500 s |
| 8 | `btnSpeaker2mainAction` | 1 | `btnSpeaker2main (translation)` | 2.500 s |
| 9 | `btnSpeaker2soundAction` | 1 | `btnSpeaker2sound (translation)` | 2.500 s |
| 10 | `btnSpeaker2startAction` | 1 | `btnSpeaker2start (translation)` | 2.500 s |
| 11 | `btnSpeaker2volumeAction` | 1 | `btnSpeaker2volume (translation)` | 2.500 s |
| 12 | `faderSpeaker2bottomAction` | 1 | `faderSpeaker2bottom (translation)` | 2.500 s |
| 13 | `faderSpeaker2topAction` | 1 | `faderSpeaker2top (translation)` | 2.500 s |
| 14 | `textSpeaker2auxAction` | 1 | `textSpeaker2aux (translation)` | 2.500 s |
| 15 | `textSpeaker2inputAction` | 1 | `textSpeaker2input (translation)` | 2.500 s |
| 16 | `textSpeaker2mainAction` | 1 | `textSpeaker2main (translation)` | 2.500 s |
| 17 | `textSpeaker2outputAction` | 1 | `textSpeaker2output (translation)` | 2.500 s |
| 18 | `textSpeaker2soundAction` | 1 | `textSpeaker2sound (translation)` | 2.500 s |
| 19 | `textSpeaker2usbAction` | 1 | `textSpeaker2usb (translation)` | 2.500 s |
| 20 | `textSpeaker2volumeAction` | 1 | `textSpeaker2volume (translation)` | 2.500 s |

\* Längden är beräknad från animationens tidskurvor när tidsdata finns i GLB-filen.

## 7. Tekniska anteckningar för webbutvecklaren

- Filen är exporterad som **GLB**, vilket normalt innebär att geometri och tillhörande resurser kan ligga samlade i en enda binär fil.
- Objekt som ska interageras med från webben bör ha tydliga och unika namn.
- Kontrollera animationernas exakta beteende i den webbaserade GLTF/GLB-spelaren eftersom GLB-formatet beskriver keyframes och targets, men inte automatiskt hur UI-interaktioner ska trigga animationerna.
- Om vissa delar ska byta färg från webben är det säkrast att låta webbkoden hitta rätt mesh/material via tydliga objekt- eller materialnamn.

## 8. Sammanfattning

Den här GLB-filen innehåller **21 noder**, **21 meshes**, **8 material**, **0 texturer** och **21 animationer**. Hierarkin ovan visar hur objekten är organiserade och tabellerna anger vilka resurser som hör till respektive del.

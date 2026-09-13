# Mixer Speaker – scenbeskrivning

**Fil:** `Mixer_speaker.glb`  
**Format:** GLB / glTF  
**GLB-version:** 2

## 1. Scenens struktur

- **Antal scener:** 1
- **Aktiv scen:** `Scene`
- **Noder/objekt:** 20
- **Meshes:** 20
- **Material:** 9
- **Texturer:** 1
- **Bildresurser:** 1
- **Animationer:** 20

## 2. Objektens hierarki

Nedan visas root-objekten och deras children i den hierarki som finns sparad i GLB-filen.

```text
├─ baseSpeaker [mesh: attachment_3_speaker_KO_Bottom_Attachment]
├─ baseSpeakerauxinput [mesh: attachment_3_speaker_KO_aux_input]
├─ baseSpeakerframe [mesh: attachment_3_speaker_KO_metal_base]
├─ baseSpeakeroutput [mesh: attachment_3_speaker_KO_output]
├─ baseSpeakerpanel [mesh: attachment_3_speaker_KO_main_body (1) (1)]
├─ baseSpeakersound [mesh: attachment_3_speaker_KO_Body38]
├─ baseSpeakerusb [mesh: attachment_3_speaker_KO_USB]
├─ btnSpeakermain [mesh: Cube.006]
├─ btnSpeakerSound [mesh: Cube.005]
├─ btnSpeakerstart [mesh: Cylinder.011]
├─ btnSpeakertempo [mesh: Cube.001]
├─ faderSpeakerbottom [mesh: Cylinder.032]
├─ faderSpeakertop [mesh: Cylinder.035]
├─ textSpeakeraux [mesh: Text.003]
├─ textSpeakerinput [mesh: Text.004]
├─ textSpeakermain [mesh: Text.006]
├─ textSpeakeroutput [mesh: Text.002]
├─ textSpeakersound [mesh: Text.007]
├─ textSpeakertempo [mesh: Text.001]
└─ textSpeakerusb [mesh: Text.005]
```

## 3. Viktiga objekt

| Objekt | Mesh | Geometri | Parent | Children |
|---|---|---|---|---:|
| `baseSpeaker` | `attachment_3_speaker_KO_Bottom_Attachment` | 17472 vertices, 1 primitive(s) | `Root` | 0 |
| `baseSpeakerauxinput` | `attachment_3_speaker_KO_aux_input` | 3880 vertices, 1 primitive(s) | `Root` | 0 |
| `baseSpeakerframe` | `attachment_3_speaker_KO_metal_base` | 15320 vertices, 1 primitive(s) | `Root` | 0 |
| `baseSpeakeroutput` | `attachment_3_speaker_KO_output` | 2828 vertices, 1 primitive(s) | `Root` | 0 |
| `baseSpeakerpanel` | `attachment_3_speaker_KO_main_body (1) (1)` | 25375 vertices, 1 primitive(s) | `Root` | 0 |
| `baseSpeakersound` | `attachment_3_speaker_KO_Body38` | 14120 vertices, 1 primitive(s) | `Root` | 0 |
| `baseSpeakerusb` | `attachment_3_speaker_KO_USB` | 2840 vertices, 1 primitive(s) | `Root` | 0 |
| `btnSpeakermain` | `Cube.006` | 604 vertices, 1 primitive(s) | `Root` | 0 |
| `btnSpeakerSound` | `Cube.005` | 604 vertices, 1 primitive(s) | `Root` | 0 |
| `btnSpeakerstart` | `Cylinder.011` | 195 vertices, 1 primitive(s) | `Root` | 0 |
| `btnSpeakertempo` | `Cube.001` | 612 vertices, 1 primitive(s) | `Root` | 0 |
| `faderSpeakerbottom` | `Cylinder.032` | 130 vertices, 1 primitive(s) | `Root` | 0 |
| `faderSpeakertop` | `Cylinder.035` | 195 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakeraux` | `Text.003` | 149 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakerinput` | `Text.004` | 252 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakermain` | `Text.006` | 38 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakeroutput` | `Text.002` | 660 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakersound` | `Text.007` | 830 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakertempo` | `Text.001` | 425 vertices, 1 primitive(s) | `Root` | 0 |
| `textSpeakerusb` | `Text.005` | 667 vertices, 1 primitive(s) | `Root` | 0 |

> **Webb:** Behåll tydliga och unika objektnamn för delar som ska hittas eller styras med JavaScript/WebGL. Parent/child-relationen är viktig om en del ska transformeras tillsammans med andra delar.

## 4. Material och texturer

| # | Material | Alpha | Texturer |
|---:|---|---|---|
| 0 | `addLightgreen3` | `OPAQUE` | — |
| 1 | `addPlasticblack3` | `OPAQUE` | — |
| 2 | `addClementine3` | `OPAQUE` | — |
| 3 | `addMetal3` | `OPAQUE` | — |
| 4 | `speakerPattern` | `OPAQUE` | Base Color → Texture 0 |
| 5 | `addPaint` | `OPAQUE` | — |
| 6 | `addMetalorange3` | `OPAQUE` | — |
| 7 | `addWhite` | `OPAQUE` | — |
| 8 | `textSpeaker` | `OPAQUE` | — |

### Texturer / bildresurser

| # | Textur | Bildkälla |
|---:|---|---|
| 0 | `Texture_0` | `net-shape-texture-design` — inbäddad buffer |

## 5. Animationer

| # | Animation | Channels | Animerade objekt | Längd |
|---:|---|---:|---|---:|
| 0 | `baseSpeakerAction` | 1 | `baseSpeaker (translation)` | 2.500 s |
| 1 | `baseSpeakerauxinputAction` | 1 | `baseSpeakerauxinput (translation)` | 2.500 s |
| 2 | `baseSpeakerframeAction` | 1 | `baseSpeakerframe (translation)` | 2.500 s |
| 3 | `baseSpeakeroutputAction` | 1 | `baseSpeakeroutput (translation)` | 2.500 s |
| 4 | `baseSpeakerpanelAction` | 1 | `baseSpeakerpanel (translation)` | 2.500 s |
| 5 | `baseSpeakersoundAction` | 1 | `baseSpeakersound (translation)` | 2.500 s |
| 6 | `baseSpeakerusbAction` | 1 | `baseSpeakerusb (translation)` | 2.500 s |
| 7 | `btnSpeakermainAction` | 1 | `btnSpeakermain (translation)` | 2.500 s |
| 8 | `btnSpeakerSoundAction` | 1 | `btnSpeakerSound (translation)` | 2.500 s |
| 9 | `btnSpeakerstartAction` | 1 | `btnSpeakerstart (translation)` | 2.500 s |
| 10 | `btnSpeakertempoAction` | 1 | `btnSpeakertempo (translation)` | 2.500 s |
| 11 | `faderSpeakerbottomAction` | 1 | `faderSpeakerbottom (translation)` | 2.500 s |
| 12 | `faderSpeakertopAction` | 1 | `faderSpeakertop (translation)` | 2.500 s |
| 13 | `textSpeakerauxAction` | 1 | `textSpeakeraux (translation)` | 2.500 s |
| 14 | `textSpeakerinputAction` | 1 | `textSpeakerinput (translation)` | 2.500 s |
| 15 | `textSpeakermainAction` | 1 | `textSpeakermain (translation)` | 2.500 s |
| 16 | `textSpeakeroutputAction` | 1 | `textSpeakeroutput (translation)` | 2.500 s |
| 17 | `textSpeakersoundAction` | 1 | `textSpeakersound (translation)` | 2.500 s |
| 18 | `textSpeakertempoAction` | 1 | `textSpeakertempo (translation)` | 2.500 s |
| 19 | `textSpeakerusbAction` | 1 | `textSpeakerusb (translation)` | 2.500 s |

**Obs:** Längden är hämtad från animationernas tidskurvor när sådan data finns. Om animationen loopas eller exakt hur den triggas bestäms normalt av implementationen i webbspelaren.

## 6. Tekniska anteckningar för webbutvecklaren

- GLB-filen är en binär glTF-fil och är avsedd att kunna laddas som en sammanhållen 3D-resurs.
- Använd objektens **exakta namn** när webbkoden ska hitta specifika delar.
- Materialnamn kan användas för att identifiera material som ska ändras, exempelvis färg eller metallic/roughness.
- För animationer bör webbutvecklaren kontrollera animationens namn och vilka objekt/transform-kanaler den påverkar.
- Om en del ska vara klickbar bör den ha ett unikt namn och vara lätt att identifiera i scenhierarkin.

## 7. Sammanfattning

`Mixer_speaker.glb` innehåller **20 noder**, **20 meshes**, **9 material**, **1 texturer** och **20 animationer**. Dokumentationen ovan visar hur scenen är uppbyggd och vilka resurser som ingår i exporten.
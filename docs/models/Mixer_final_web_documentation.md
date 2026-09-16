# Mixer – GLB Scene Documentation

**Fil:** `Mixer_final.glb`  
**Format:** glTF 2.0 / GLB  
**Syfte:** Dokumentation för webbutvecklare som ska använda modellen på webben.

---

## 1. Översikt

GLB-filen innehåller en mixer med:

- **68 noder/objekt**
- **66 mesh-objekt**
- **12 material**
- **2 Empty-objekt**
- **7 animationer**
- Inga externa texturer/bildfiler är inbäddade som separata glTF-images.
- Ingen kamera eller armature/skin finns i filen.

Scenen är i huvudsak en **flat hierarchy**, vilket betyder att objekten ligger direkt under scenen och inte har några exporterade child-noder.

---

## 2. Scenens struktur

### Basdelar

| Objekt | Beskrivning |
|---|---|
| `baseAuxinput` | Basdel för AUX/INPUT-området |
| `baseBottom` | Undre/bottenplatta |
| `baseLogo` | Övre platta/område för logotyp |
| `baseOutput` | Basdel för OUTPUT-området |
| `basePanel` | Huvudpanelen/chassit |
| `baseSpeaker` | Högtalar-/speakerområde |
| `baseUsb` | Basdel för USB-området |

### Knappar

| Objekt | Beskrivning |
|---|---|
| `btnCue` | CUE-knapp för kanal 1 |
| `btnCue2` | CUE-knapp för kanal 2 |
| `btnFx` | FX-knapp för kanal 1 |
| `btnFx2` | FX-knapp för kanal 2 |
| `btnSelect` | SELECT-knapp |
| `btnStart` | START-knapp |

**Webbinteraktion:** Dessa objekt är tydligt namngivna och kan användas som interaktiva delar i webblösningen.

### Faders

| Objekt | Beskrivning |
|---|---|
| `faderBottomupdown` | Fader, animerad |
| `faderBottomupdown2` | Fader, animerad |
| `faderTopupdown` | Fader, animerad |
| `faderTopupdown2` | Fader, animerad |

### Gain-kontroller

| Objekt | Beskrivning |
|---|---|
| `gainBottom` | Gain-kontroll |
| `gainBottom2` | Gain-kontroll, kanal 2 |
| `gainMiddle` | Gain-kontroll |
| `gainMiddle2` | Gain-kontroll, kanal 2 |
| `gainTop` | Gain-kontroll |
| `gainTop2` | Gain-kontroll, kanal 2 |

### HIGH-kontroller

| Objekt | Beskrivning |
|---|---|
| `highBottom` | HIGH-kontroll |
| `highBottom2` | HIGH-kontroll, kanal 2 |
| `highMiddle2` | HIGH-kontroll, kanal 2 |
| `highMiddleturn` | HIGH-kontroll med rotation, animerad |

### MID-kontroller

| Objekt | Beskrivning |
|---|---|
| `midBottom` | MID-kontroll |
| `midBottom2` | MID-kontroll, kanal 2 |
| `midMiddle` | MID-kontroll |
| `midMiddleturn2` | MID-kontroll med rotation/animation |
| `midTop` | MID-kontroll |
| `midTopturn2` | MID-kontroll med rotation/animation |

### LOW-kontroller

| Objekt | Beskrivning |
|---|---|
| `lowBottom` | LOW-kontroll |
| `lowBottom2` | LOW-kontroll, kanal 2 |
| `lowMiddle` | LOW-kontroll |
| `lowMiddle2` | LOW-kontroll, kanal 2 |
| `lowTop` | LOW-kontroll |
| `lowTop2` | LOW-kontroll, kanal 2 |

### PHONES / VOLUME

| Objekt | Beskrivning |
|---|---|
| `phonesBottom` | PHONES-kontroll |
| `phonesMiddle` | PHONES-kontroll |
| `phonesTop` | PHONES-kontroll |
| `volumeBottom` | VOLUME-kontroll |
| `volumeMiddle` | VOLUME-kontroll |
| `volumeTop` | VOLUME-kontroll |

---

## 3. Empty-objekt / Socket-punkter

Filen innehåller två Empty-noder:

- `emptyDown`
- `emptyUp`

De har **ingen mesh-geometri**. En Empty:s position är samtidigt dess origin/pivot.

### Viktigt för webbutvecklaren

Dessa Empty-objekt kan användas som **attachment points / sockets** för andra 3D-delar.

Tanken är att webbutvecklaren ska kunna:

1. hitta Empty-noden med dess namn,
2. läsa dess transform,
3. placera en annan modell/komponent på samma position,
4. använda dess rotation/orientering om komponenten behöver riktas på ett bestämt sätt.

**Varje Empty ska betraktas som en separat socket.**

### Socket-namn

```text
emptyDown
emptyUp
```

Om dessa används som sockets i webbimplementationen bör namnen behållas oförändrade.

> Obs: En Empty fungerar inte som ett Mesh-objekt där man separat flyttar "origin". För en Empty är själva nodens position dess origin. Därför är det viktiga att Empty:n är placerad exakt där den andra komponenten ska anslutas.

---

## 4. Text och etiketter

Följande objekt innehåller text/etiketter:

| Objekt | Funktion |
|---|---|
| `textAux` | AUX |
| `textCue` | CUE |
| `textCue2` | CUE, kanal 2 |
| `textFx` | FX |
| `textFx2` | FX, kanal 2 |
| `textGain` | GAIN |
| `textGainsmall` | GAIN, mindre etikett |
| `textHigh` | HIGH |
| `textHigh2` | HIGH, kanal 2 |
| `textInput` | INPUT |
| `textLogotype` | Geddens logotyp |
| `textLow` | LOW |
| `textLow2` | LOW, kanal 2 |
| `textMid` | MID |
| `textMid2` | MID, kanal 2 |
| `textOutput` | OUTPUT |
| `textPhones` | PHONES |
| `textSelect` | SELECT |
| `textUsb` | USB |
| `textVolume` | VOLUME |
| `textWatermark` | Watermark |

---

## 5. Material

GLB-filen innehåller **12 material**.

| Material | Typ/funktion |
|---|---|
| `plasticBlack` | Svart plast |
| `metalLightgreen` | Ljusgrön/gulgrön metall |
| `plasticOffwhite` | Off-white plast |
| `plasticClementine` | Clementine/orange plast |
| `metalGreen` | Grön metall |
| `metalBlack` | Svart metall |
| `plasticLightgreen` | Ljusgrön/gulgrön plast |
| `plasticGray` | Grå plast |
| `metalOrange` | Orange metall |
| `plasticOrange` | Orange plast |
| `plasticGreen` | Grön plast |
| `logoColor` | Material för logotyp |

Materialen använder glTF:s PBR-materialsystem.

### Texturer

Filen har **inga separata glTF-texturer/images** (`textures: 0`, `images: 0`).

Utseendet kommer därför huvudsakligen från materialens färg, metallic och roughness-värden.

---

## 6. Animationer

Det finns **7 animationer** i GLB-filen.

| Animation | Objekt | Typ |
|---|---|---|
| `faderBottomupdown` | `faderBottomupdown` | Translation |
| `faderBottomupdown2` | `faderBottomupdown2` | Translation |
| `faderTopupdown` | `faderTopupdown` | Translation |
| `faderTopupdown2` | `faderTopupdown2` | Translation |
| `highMiddleturn` | `highMiddleturn` | Rotation |
| `midMiddleturn2` | `midMiddleturn2` | Translation + rotation |
| `midTopturn2` | `midTopturn2` | Translation + rotation |

### Animationstid

Samtliga animationer använder keyframes från ungefär:

```text
0.0417 sekunder → 6 sekunder
```

Det ger en animationstid på cirka **6 sekunder**.

Interpolation är **LINEAR**.

### Looping

GLB-filen innehåller inte någon separat inställning som uttryckligen säger att animationerna ska loopas.

Om animationen ska loopas på webben bör webbutvecklaren därför själv ställa in exempelvis:

```javascript
animation.loop = true;
```

eller motsvarande loop-inställning i det bibliotek som används.

---

## 7. Objekt och mesh-namn

Följande mesh-data finns i filen:

```text
KO_basic_1_KO_aux_input
KO_basic_1_KO_bottom
KO_basic_1_KO_top_plate_logo
KO_basic_1_KO_output
KO_basic_1_KO_main_body
Plane
KO_basic_1_KO_USB

Cube.005
Cube.006
Cube.009
Cube.011
Cube.012
Cube.013
Cube.014
Cube.015

Cylinder.011
Cylinder.014
Cylinder.032
Cylinder.034
Cylinder.035
Cylinder.036
Cylinder.037
Cylinder.038
Cylinder.039
Cylinder.040
Cylinder.041
Cylinder.042
Cylinder.043
Cylinder.044
Cylinder.045
Cylinder.046
Cylinder.047
Cylinder.048
Cylinder.049
Cylinder.050
Cylinder.051
Cylinder.052
Cylinder.053
Cylinder.054
Cylinder.055
Cylinder.056
Cylinder.057
Cylinder.058
Cylinder.059
Cylinder.060

Text
Text.001
Text.002
Text.003
Text.004
Text.005
Text.006
Text.007
Text.008
Text.009
Text.010
Text.011
Text.012
Text.013
Text.014
Text.015
Text.016
Text.017
Text.018

Curve
Curve.001
```

Mesh-namnen är främst interna Blender-/exportnamn. **För webbinteraktion bör webbutvecklaren använda scenens node/object-namn** (exempelvis `btnCue`, `faderTopupdown`, `emptyUp`) snarare än de generiska mesh-namnen.

---

## 8. Objektens hierarki

Den exporterade scenen är i praktiken platt:

```text
Scene
├── baseAuxinput
├── baseBottom
├── baseLogo
├── baseOutput
├── basePanel
├── baseSpeaker
├── baseUsb
├── btnCue
├── btnCue2
├── btnFx
├── btnFx2
├── btnSelect
├── btnStart
├── emptyDown
├── emptyUp
├── faderBottomupdown
├── faderBottomupdown2
├── faderTopupdown
├── faderTopupdown2
├── gain...
├── high...
├── low...
├── mid...
├── phones...
├── text...
└── volume...
```

Det finns inga exporterade child-noder under dessa objekt i GLB-strukturen.

---

## 9. Rekommenderade interaktiva objekt på webben

### Knappar

```text
btnCue
btnCue2
btnFx
btnFx2
btnSelect
btnStart
```

### Faders

```text
faderBottomupdown
faderBottomupdown2
faderTopupdown
faderTopupdown2
```

### Rattar

```text
gainTop
gainTop2
gainMiddle
gainMiddle2
gainBottom
gainBottom2

highMiddleturn
midMiddleturn2
midTopturn2

volumeTop
volumeMiddle
volumeBottom
```

De animerade objekten kan användas som referens för hur rotation/translation ska fungera.

---

## 10. Rekommenderad namnstandard för webben

Använd helst **exakta node-namn från GLB-filen** när JavaScript-kod ska hitta objekten.

Exempel:

```javascript
const cueButton = scene.getObjectByName("btnCue");
const fader = scene.getObjectByName("faderTopupdown");
const socket = scene.getObjectByName("emptyUp");
```

Det gör kopplingen mellan Blender-filen och webbapplikationen tydlig.

---

## 11. Viktigt vid GLB-användning

- Använd **node/object-namnen** för att hitta interaktiva objekt.
- `emptyUp` och `emptyDown` är Empty-noder och kan användas som sockets/attachment points.
- Använd objektets transform för att placera externa 3D-delar på socketen.
- Det finns **7 animationer**.
- Animationerna är cirka **6 sekunder** långa.
- Animationerna har **LINEAR** interpolation.
- Looping är inte uttryckligen definierat i GLB-filen.
- Materialen är PBR-baserade.
- Det finns inga separata texturbilder i GLB:n.
- Mesh-namn som `Cylinder.058` och `Cube.013` bör normalt inte användas som primära webbreferenser när ett tydligare node-namn finns.

---

## 12. Kort sammanfattning för webbutvecklaren

**Modellen består av en mixer där knappar, faders och rattar är separata noder.**

De viktigaste objekten för interaktion är:

```text
BUTTONS
btnCue
btnCue2
btnFx
btnFx2
btnSelect
btnStart

FADERS
faderBottomupdown
faderBottomupdown2
faderTopupdown
faderTopupdown2

ROTARY CONTROLS
highMiddleturn
midMiddleturn2
midTopturn2

SOCKETS
emptyUp
emptyDown
```

**Sockets:** `emptyUp` och `emptyDown` är Empty-objekt. Deras position representerar den punkt där andra 3D-komponenter kan anslutas.

**Animationer:** 7 st.

**Material:** 12 st.

**Texturer:** 0 separata texturer.

**Kameror:** 0.

**Skins/Armature:** 0.

/* 

Available animations:
0:"faderBottomupdown"
1:"faderBottomupdown2"
2:"faderTopupdown"
3:"faderTopupdown2"
4:"highMiddleturn"
5:"midMiddleturn2"
6:"midTopturn2"

*/

export const animationGroups: Record<string, string[]> = {
    fader1: ['faderTopupdown', 'faderBottomupdown'],
    fader2: ['faderTopupdown2', 'faderBottomupdown2'],
    high: ['highMiddleturn'],
    mid2: ['midMiddleturn2'],
}
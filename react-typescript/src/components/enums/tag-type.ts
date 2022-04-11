export enum TagType {
  PS4 = 'PS4',
  PS5 = 'PS5',
  XboxSeries = 'Xbox Series',
  XboxOne = 'Xbox One',
  PC = 'PC',
  Switch = 'Switch',
}

const tagTypes = {
  [TagType.PS4]: { name: 'PS4', color: '#1565c0' },
  [TagType.PS5]: { name: 'PS5', color: '#1565c0' },
  [TagType.XboxSeries]: { name: 'Xbox Series', color: '#529836' },
  [TagType.XboxOne]: { name: 'Xbox One', color: '#529836' },
  [TagType.PC]: { name: 'PC', color: '#BDBBBB' },
  [TagType.Switch]: { name: 'Switch', color: '#c62828' },
}
export const getTagType = (type: TagType) => {
    return(
    tagTypes[type]
)}



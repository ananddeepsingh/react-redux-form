export const SAVEDATATTOSTORE = 'SAVEDATATTOSTORE';

export function saveDataToStoreFn(items){
  const action = {
    type: SAVEDATATTOSTORE,
    items
  }
  return action
}
